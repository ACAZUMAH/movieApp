import MaskedView from "@react-native-masked-view/masked-view";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AppRoutes } from "src/constants";
import { images } from "src/constants/images";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { TrendingMovie } from "src/interfaces";

interface TrendingCardProps {
  index: number;
  movie: TrendingMovie;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ movie, index }) => {
  const { navigate } = useAppNavigation();
  return (
    <TouchableOpacity
      className="w-32 relative pl-5"
      onPress={() => navigate(AppRoutes.MOVIE, { id: movie.movie_id })}
    >
      <Image
        source={{ uri: movie.poster_url }}
        className="w-32 h-48 rounded-lg"
        resizeMode="cover"
      />
      <View className="absolute bottom-4 -left-1.5 px-2 py-1 rounded-full">
        <MaskedView
          maskElement={
            <Text className="font-bold text-white text-7xl">{index + 1}</Text>
          }
        >
          <Image
            source={images.rankingGradient}
            className="size-14"
            resizeMode="cover"
          />
        </MaskedView>
      </View>
      <View>
        <Text
          className="text-md font-bold text-light-200 mt-2"
          numberOfLines={1}
        >
          {movie.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingCard;
