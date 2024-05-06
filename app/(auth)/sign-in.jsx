import { View, Text, ScrollView, Dimensions, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { Link } from "expo-router";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      await signIn(form.email, form.password);
      // setUser(result);
      // setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View
          className="flex justify-center w-full h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[150px] h-[50px]"
          />

          <Text className="mt-10 text-2xl font-semibold text-white font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <View className="h-7"></View>

          <CustomButton
            title="Sign In"
            onPress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>

          <Link href="/home" className="text-lg font-psemibold text-secondary">
            Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
