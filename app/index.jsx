import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4">
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

          <View className="relative mt-5 w-full">
            <Text className="text-3xl text-white font-bold text-center">
              Lorem ipsum dolor adasd asdasd
              <Text className="text-secondary-200"> Logo</Text>
            </Text>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque
              quasi temporibus possimus
            </Text>
            <CustomButton
              title="Continue with Email"
              containerStyle="w-full mt-7"
              onPress={() => {
                router.push("/sign-in");
              }}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
