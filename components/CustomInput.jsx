import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const EmptyInput = ({
  title,
  value,
  placeholder,
  onChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="flex flex-row items-center w-full h-16 px-4 border-b-2 tezt-xl rounded-2xl border-black-200 focus:border-secondary-100">
        <TextInput
          className="flex-1 text-2xl text-white font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={onChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {/* {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          )} */}
      </View>
    </View>
  );
};

export { EmptyInput };
