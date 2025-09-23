import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { icons } from "src/constants/icons";
import { useAppFetch } from "src/hooks/useAppFetch";
import { fetchMovieDetails } from "src/services";

export const Movie = () => {
  const { params } = useRoute();

  //@ts-ignore
  const { data, loading, error } = useAppFetch(() =>fetchMovieDetails(params?.id));

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-xl font-bold text-white">{data?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-light-200 text-sm">
              {data?.release_date?.split("-")[0]}
            </Text>
            <Text className="text-light-200 text-sm">{data?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
            <Image source={icons.star} className="size-4" />
            <Text className="text-white font-bold text-sm">
                {Math.round(data?.vote_average ?? 0)} / 10
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
