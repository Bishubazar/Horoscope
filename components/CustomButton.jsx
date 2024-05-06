import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import mergeNames from "../utils/mergeNames";

const CustomButton = ({
  title = "Цааш",
  onPress,
  containerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={mergeNames(
        "bg-secondary rounded-xl min-h-[62px] justify-center items-center",
        containerStyle,
        isLoading ? "opacity-50" : ""
      )}
      disabled={isLoading}
    >
      <Text
        className={mergeNames("text-light font-psemibold text-lg", textStyles)}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
