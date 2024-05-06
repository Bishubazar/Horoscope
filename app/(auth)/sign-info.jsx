import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Alert,
  Pressable,
  Platform,
  Modal,
  Button,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { Link } from "expo-router";
import { signIn } from "../../lib/appwrite";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import mergeNames from "../../utils/mergeNames";

const SignIn = (props) => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   "Inter-Black": require("../../assets/fonts/SpaceMono-Regular.ttf"),
  // });
  // const [date, setDate] = useState(new Date());
  const { defaultDate, onDateChange } = props;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
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
            className="w-[115px] h-[34px]"
          />
          <Text className="mt-10 font-semibold text-white font-psemibold">
            Log in to Aora
          </Text>

          <Text className="mt-10 font-bold text-center text-white">
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
            <View onPress={() => setShow(!show)}>
              <Text>asdasd</Text>
            </View>
          </Pressable>
          <CustomButton title="Next" />

          <Link href="/home" className=" font-psemibold text-secondary">
            Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
