import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";

export default function StepHeader({ step, title, children }) {
  return (
    // <View style={[Styles.container, { flexDirection: "column", gap: 100 }]}>
    <View className="flex flex-col w-full">
      <View
        style={[
          {
            color: "white",
            alignItems: "center",

            flexDirection: "column",
            gap: 15,
          },
        ]}
      >
        {/* <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[150px] h-[50px]"
        /> */}
        <Text className=" text-secondary font-pregular">Алхам {step} / 4</Text>

        <Text className="text-[40px] text-light font-psemibold">{title}</Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {children}
      </View>
    </View>
  );
}
