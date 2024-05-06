import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite";
import StepHeader from "../../components/StepHeader";
import { EmptyInput } from "../../components/CustomInput";

const Gender = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState("");

  return (
    <SafeAreaView className=" bg-primary">
      {/* <ScrollView> */}
      <View
        className="flex justify-between w-full h-full px-4 py-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <StepHeader step={1} title="Таны хүйс?" />

        <View>
          {/* <Text className="mt-10 text-2xl font-semibold text-white font-psemibold">
              Log in to Aora
            </Text> */}

          {/* <FormField
              value={form.username}
              onChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles="mt-7"
              keyboardType="email-address"
            /> */}
          <EmptyInput
            placeholder="Хүйс"
            onChangeText={(e) => setForm(e)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          {/* <FormField
              title="Password"
              value={form.password}
              onChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles="mt-7"
            /> */}
          <View className="h-7"></View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={{ flex: 1 }}
        >
          <CustomButton
            // onPress={submit}
            onPress={() => router.push("/age")}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Gender;
