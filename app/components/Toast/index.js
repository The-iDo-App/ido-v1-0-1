import React from "react";
import { View, ToastAndroid } from "react-native";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

const Snackbar = ({message,visibleToast}) => {
  return (
    <View>
      <Toast message={message} visible={visibleToast}/>
    </View>
  );
};

export default Snackbar;