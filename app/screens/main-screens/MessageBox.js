import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../src/consts/color';
import MessageBoxHeaderWrapper from '../../components/MessageBoxHeader';

export default function MessageBox({ route, navigation }) {
  const { name, profile_picture } = route.params;
  return (
    <View>
      <MessageBoxHeaderWrapper
        Name={name}
        ProfilePicture={profile_picture}
        navigation={navigation}
      />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
        neque quis tellus dapibus consequat. In hac habitasse platea dictumst.
        Sed vel libero facilisis, pulvinar augue non, tincidunt odio. Fusce
        placerat pulvinar ex ac malesuada. Suspendisse pharetra vitae sem id
        hendrerit. Aenean lorem felis, dapibus quis dapibus id, porttitor
        euismod arcu. Phasellus at augue molestie, dignissim ligula in,
        hendrerit tortor. Vestibulum efficitur libero vitae leo placerat
        lacinia. Suspendisse eleifend laoreet ligula non accumsan. Nam mi erat,
        faucibus in ante eget, luctus posuere ex. Fusce ultrices elit velit,
        eget varius dui dapibus a. Vestibulum ut feugiat lacus, quis semper
        diam. Ut ornare dui quis tincidunt molestie. Nunc lobortis lacinia nulla
        sed commodo. Aliquam id ligula porttitor, dignissim nibh ut, luctus mi.
        Aliquam erat volutpat. In hac habitasse platea dictumst. Fusce cursus
        vulputate fringilla. Proin eget sapien sed nunc malesuada venenatis.
        Mauris quis egestas nunc. In non velit molestie enim scelerisque
        scelerisque. Vivamus a ex urna. Maecenas condimentum lorem placerat,
        mattis nisi et, elementum felis. Maecenas urna mi, porta id leo in,
        egestas sodales mi. Nulla nec posuere sem, vitae ullamcorper nisi. In
        hac habitasse platea dictumst. Cras a ipsum consequat, vestibulum ex sit
        amet, iaculis magna. Nunc sodales blandit diam, vitae pulvinar lorem
        efficitur tempor. Integer non placerat lectus, a varius mi. Sed dapibus
        tempor urna, vel molestie nisi finibus nec. Morbi eu elementum purus,
        eget interdum libero. Nullam sodales iaculis sapien ac imperdiet.
        Vivamus tristique enim in nisi pharetra porta molestie vitae massa.
        Fusce scelerisque scelerisque porta. Vivamus faucibus tincidunt erat, ac
        condimentum ipsum. Aliquam vitae volutpat nisl. Cras condimentum semper
        consectetur. Proin leo enim, tristique sit amet bibendum a, pulvinar at
        felis. Integer et lorem magna. Nunc vel facilisis felis, nec molestie
        purus. Curabitur sed posuere mi. Nullam sollicitudin ultricies enim, eu
        rhoncus felis dapibus iaculis. Praesent dapibus volutpat laoreet. Sed
        maximus posuere vehicula. Nam id nulla nisi. Maecenas varius turpis eu
        velit iaculis porta. Suspendisse eu risus laoreet, blandit justo at,
        porta urna. Phasellus iaculis purus vitae hendrerit porttitor. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras et purus quis ipsum mattis hendrerit. Nam
        condimentum augue vitae scelerisque dignissim. Proin mollis convallis
        pellentesque. Sed eleifend libero at dolor feugiat egestas nec quis est.
        Proin convallis eleifend eros. Nunc nisi lectus, blandit sed venenatis
        quis, pretium non ligula. Maecenas interdum a ipsum ac hendrerit. Fusce
        sodales dui nec ante fringilla tincidunt. Sed volutpat ante quis dapibus
        condimentum. Phasellus sed lobortis felis. Aliquam erat volutpat. Fusce
        eu ornare augue. Fusce vitae ex laoreet, tempor erat commodo, ultrices
        odio. Sed eu ex nec diam tincidunt rutrum.
      </Text>
    </View>
  );
}
