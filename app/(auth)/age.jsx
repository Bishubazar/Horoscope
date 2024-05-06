import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
import mergeNames from "../../utils/mergeNames";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Gender = (props) => {
  const [isSubmitting, setSubmitting] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  // const [date, setDate] = useState(new Date());
  const { defaultDate, onDateChange } = props;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(true);
  // const handleDateChange = (event, selectDate) => {
  //   if (event.type === "set") {
  //     const currentDate = selectDate || date;
  //     console.log(date);
  //     setDate(currentDate);
  //   }
  // };

  const onChange = (e, selectedDate) => {
    setDate(new Date(selectedDate));
    console.log(selectedDate);
  };

  const onAndroidChange = (e, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(new Date(selectedDate));
    }
    console.log(selectedDate);
  };

  const onCancelPress = () => {};

  const renderDatePicker = () => {
    return (
      <>
        <RNDateTimePicker
          display={Platform.OS === "ios" ? "spinner" : "default"}
          // timeZoneName={0}
          value={new Date(date)}
          mode="date"
          textColor="white"
          maximumDate={new Date(2030, 11, 31)}
          minimumDate={new Date(1900, 0, 1)}
          onChange={Platform.OS === "ios" ? onChange : onAndroidChange}
        />
      </>
    );
  };

  return (
    <SafeAreaView className=" bg-primary">
      {/* <ScrollView> */}
      <View
        className="flex justify-between w-full h-full px-4 py-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <StepHeader step={1} title="Таны нас?" />

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
          <Text className="mt-10 text-xl font-bold text-center text-white">
            {`${date.getFullYear()} / ${
              date.getMonth() + 1
            } / ${date.getDate()}`}
          </Text>

          <Pressable onPress={() => setShow(true)} className="flex-col w-full">
            <View
              className={mergeNames(
                show ? "h-[200px]" : "h-0",
                "my-10 transition ease-in-out duration-300"
              )}
              //   style={
              //     show ? { height: 200 } : { height: 0, transform: "0.3s ease" }
              //   }
            >
              {Platform.OS === "ios" && show && renderDatePicker()}
            </View>
            {/*  <View
              className={mergeNames(
                "w-full border-2 rounded-lg py-5 border-gray-100 text-gray-100"
              )}
            >
           <Text className="text-gray-100">
                {`${date.getFullYear()} / ${
                  date.getMonth() + 1
                } / ${date.getDate()}`}
              </Text> 
            </View>*/}
            {/* <View onPress={() => setShow(!show)}>
              <Text>asdasd</Text>
            </View> */}
          </Pressable>

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
            onPress={() => router.push("/home")}
            containerStyles="mt-7"
            // isLoading={isSubmitting}
          />
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Gender;
