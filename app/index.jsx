import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="items-center justify-center w-full h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative w-full mt-5">
            <Text className="font-bold text-center text-light">
              Hi. Тавтай морил
              {/* <Text className="text-secondary-200"> Logo</Text> */}
            </Text>
            <Text className="text-center text-gray-100 font-pregular mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
              quasi temporibus possimus
            </Text>
            <CustomButton
              title="Эхлэх"
              containerStyle="w-full mt-7"
              onPress={() => {
                router.push("/username");
              }}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
