import * as React from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import Conditional from "src/components/conditional/Conditional";
import { SearchBar } from "src/components/searchBar";
import { AppRoutes } from "src/constants";
import { icons } from "src/constants/icons";
import { images } from "src/constants/images";
import { useAppFetch } from "src/hooks/useAppFetch";
import { useAppNavigation } from "src/hooks/useAppNavigation";
import { fetchMovies } from "src/services";

export const Home = () => {
  const { navigateToTab } = useAppNavigation();
  const { data, loading, error } = useAppFetch(() =>
    fetchMovies({ query: "" })
  );
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10, mt-20 mb-5 mx-auto" />

        <Conditional condition={loading}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        </Conditional>

        <Conditional condition={Boolean(error)}>
          <Text className="text-white">
            Error: {error?.message || "Something went wrong"}
          </Text>
        </Conditional>

        <View className="flex-1 mt-4">
          <SearchBar
            placeholder="Search movies, TV shows..."
            onPress={() => navigateToTab(AppRoutes.SEARCH)}
          />
          <Conditional condition={!loading && !error}>
            <Text className="text-lg text-white font-bold mt-3 mb-3">
              Latest Movies
            </Text>
          </Conditional>
        </View>
      </ScrollView>
    </View>
  );
};
