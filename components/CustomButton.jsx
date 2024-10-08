import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = () => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62] justify-center items-center`}
    >
      <Text className={"text-primary font-psemibold"}>CustomButton</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
