import ResetPassword from "../../components/ResetPassword";
import { View, Text, Touchable, Linking, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState, useCallback } from "react";
import COLORS from "../../src/consts/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "../../components/Toast";
import axios from "axios";
import {
  BACKEND_BASEURL,
  BACKEND_DEVURL,
  clientSecret,
  clientID,
  paperstackEmail,
  paperstackPassword,
} from "@env";
import paperstack from "paperstack";
import { paperStackClient as client } from "../PaperStackClient";
export default function OTPPaperStack({ navigation }) {
  const maxTimer = 5;
  const [email, setEmail] = useState(null);
  const [counter, setCounter] = useState(maxTimer);
  const [activeCounter, setActiveCounter] = useState(false);
  const [userOtp, setOtp] = useState("");
  const [OTPLink, setOTPLink] = useState(null);

  const [message, setMessage] = useState("Security code sent!");
  const [visibleToast, setvisibleToast] = useState(false);
  useEffect(() => setvisibleToast(false), [visibleToast]);

  // activate otp timer
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  });
  useEffect(async () => {
    let user = await AsyncStorage.getItem("email");
    let myotp = await AsyncStorage.getItem("link");
    setEmail(user);
    setOTPLink(myotp);
  }, [email]);

  const submitOTP = async () => {
    let generator;
    try {
      await client.init();
      generator = await client.verifyOTP(email, userOtp);
    } catch (err) {
      console.log(err);
    }
    if (generator) {
      setMessage("Validating your PaperStack OTP.");
      setvisibleToast(true);
      navigation.navigate("CreateAccount");
    } else {
      console.log("Paperstack error occured!");
    }
    return;
  };

  const resendOTP = async () => {
    try {
      setMessage("Please standby while we are processing your PaperStack OTP.");
      setvisibleToast(true);

      await client.init();
      const createGenerator = await client.createOTPGenerator(
        email,
        1000 * 60 * 5
      );

      if (createGenerator) {
        setOTPLink(createGenerator.link);
        const allowGenerator = await client.allowGenerateOTP(email);
        await AsyncStorage.setItem("link", createGenerator.link);
        await AsyncStorage.setItem("qr", createGenerator.qr);
        setMessage(createGenerator.log);
      }
    } catch (err) {
      console.log(err);
    }

    setvisibleToast(true);
    return;
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: "flex-start",
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Snackbar message={message} visibleToast={visibleToast} />
      <ResetPassword
        icon={"lock"}
        text={"Enter 8-digit OTP"}
        pageTitle={"otp verification".toUpperCase()}
        pageDescription={`Please follow the link for your OTP`}
        buttonText={"submit".toUpperCase()}
        maxLength={8}
        linking={OTPLink}
        onPressed={submitOTP}
        onChangeText={(e) => setOtp(e)}
      />
      <Text
        style={{ textAlign: "center", color: COLORS.darkPink, fontSize: 18 }}
      >
        Resend OTP in {counter}
      </Text>
      <TouchableOpacity
        disabled={counter != 0}
        onPress={resendOTP}
        style={{ marginVertical: 40 }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.blue,
            fontSize: 18,
            textDecorationLine: counter != 0 ? "none" : "underline",
            opacity: counter != 0 ? 0.5 : 1,
            fontWeight: "600",
          }}
        >
          RESEND OTP
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

//TODO: match the current validation with entered validation
