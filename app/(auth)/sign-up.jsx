import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Image, Alert } from "react-native";
import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";
import { CustomButton, FormField } from "../../components";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
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

          <Text className="mt-10 font-semibold text-white font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            onChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
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
            title="Sign Up"
            onPress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex flex-row justify-center gap-2 pt-5">
            <Text className="text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className=" font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
          <Link href="/sign-info" className=" font-psemibold text-secondary">
            Next
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
