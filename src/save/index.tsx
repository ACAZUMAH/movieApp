import * as React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "src/constants/icons";

export const Save = () => {
  return (
    <View className="flex-1 bg-primary px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image
          source={icons.save}
          className="size-20 rounded-full bg-dark-100 p-5"
          tintColor="#fff"
        />
        <Text className="text-gray-500 text-base">Save Upcoming</Text>
      </View>
    </View>
  );
};
