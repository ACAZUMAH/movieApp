import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import Conditional from "src/components/conditional/Conditional";
import { SearchBar } from "src/components/searchBar";
import { icons } from "src/constants/icons";

interface SearchHeaderProps {
  loading: boolean;
  error?: Error | null;
  movies: any[];
  search: string;
  setSearch?: (text: string) => void;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  loading,
  error,
  movies,
  search,
  setSearch,
}) => {
  return (
    <>
      <View className="w-full flex-row justify-center mt-20 items-center">
        <Image source={icons.logo} className="w-12 h-10" />
      </View>

      <View className="my-5">
        <SearchBar
          placeholder="Search through 300+ movies online"
          search={search}
          onChangeText={setSearch}
        />
      </View>

      <Conditional condition={loading}>
        <ActivityIndicator size="large" color="#0000ff" className="my-3" />
      </Conditional>

      <Conditional condition={Boolean(error)}>
        <View className="text-red-500 px-5 my-3">
          Error: {error?.message || "Something went wrong"}
        </View>
      </Conditional>

      <Conditional
        condition={Boolean(
          !loading && !Boolean(error) && search.trim() && movies?.length > 0
        )}
      >
        <Text className="text-xl text-white font-bold">
          search Results for <Text className="text-accent">{search}</Text>
        </Text>
      </Conditional>
    </>
  );
};
