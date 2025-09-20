import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppRoutes } from "src/constants";
import { icons } from "src/constants/icons";
import { useAppNavigation } from "src/hooks/useAppNavigation";

interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}) => {
  const { navigate } = useAppNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(AppRoutes.MOVIE, { id: id })}
      className="w-[30%]"
    >
      <Image
        source={{
          uri: poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://placehold.co/600x400/1a1a1a/ffffff.png",
        }}
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-md font-bold text-white mt-2" numberOfLines={1}>
        {title}
      </Text>
      <View className="flex-row items-center justify-between mt-1">
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <Text className="text-xs text-light-300">
          {release_date?.split("-")[0]}
        </Text>
      </View>
      {/* <View className="">
         <Text className="text-xs font-medium text-light-300 uppercase">
            Movie
        </Text> 
      </View> */}
    </TouchableOpacity>
  );
};
