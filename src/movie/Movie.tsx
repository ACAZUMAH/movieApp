import { useRoute } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { icons } from "src/constants/icons";
import { useAppFetch } from "src/hooks/useAppFetch";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { fetchMovieDetails } from "src/services";
import { MovieInfo } from "./components/MovieInfo";

export const Movie = () => {
  const { params } = useRoute();

  const { navigateBack } = useAppNavigation();

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
            <Text className="text-light-200 text-sm">
              ({data?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={data?.overview} />

          <MovieInfo
            label="Genres"
            value={data?.genres?.map((g) => g.name).join(" . ") || "N/A"}
          />

          <MovieInfo
            label="Countries"
            value={
              data?.production_countries?.map((c) => c.name).join(" . ") ||
              "N/A"
            }
          />

          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={`$${data?.budget! / 1_000_000} million`}
            />
            <MovieInfo
              label="Revenue"
              value={`$${Math.round(data?.revenue!) / 1_000_000} million`}
            />
          </View>

          <MovieInfo label="Tagline" value={data?.tagline} />

          <MovieInfo
            label="Production Companies"
            value={data?.production_companies.map((c) => c.name).join(" . ")}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => navigateBack()} className="absolute bottom-6 left-0 right-0 mx-5 bg-accent rounded-full 
      flex flex-row items-center justify-center z-50 py-3.5">
        <Image
          source={icons.arrow}
          className="size-5 mr-1 mt-0.5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-base">Back</Text>
      </TouchableOpacity>
    </View>
  );
};
