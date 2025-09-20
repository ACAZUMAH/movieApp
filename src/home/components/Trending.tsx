import React from "react";
import { FlatList, Text, View } from "react-native";
import { TrendingMovie } from "src/interfaces";
import TrendingCard from "./TrendingCard";

interface TrendingProps {
  movies?: TrendingMovie[] | null;
}

export const Trending: React.FC<TrendingProps> = ({ movies }) => {
  return (
    <View className="mt-10">
      <Text className="text-lg text-white font-bold mb-3">Trending Movies</Text>

      <FlatList
        className="mb-4 mt-3"
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-6" />}
        data={movies}
        renderItem={({ item, index }) => (
          <TrendingCard movie={item} key={index} index={index} />
        )}
        keyExtractor={(item) => item.movie_id.toString()}
      />
    </View>
  );
};
