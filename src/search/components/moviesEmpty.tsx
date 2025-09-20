import React from "react";
import { Text, View } from "react-native";
interface MoviesEmptyProps {
  search: string;
}

export const MoviesEmpty: React.FC<MoviesEmptyProps> = ({ search }) => {
  return (
    <View className="mt-10 px-5">
      <Text className="text-center text-gray-500">
        {search.trim() ? "No results found" : "Start searching for movies"}
      </Text>
    </View>
  );
};
