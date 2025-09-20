import * as React from "react";
import { FlatList, Image, View } from "react-native";
import Conditional from "src/components/conditional/Conditional";
import { MovieCard } from "src/components/movie";
import { images } from "src/constants/images";
import { useAppFetch } from "src/hooks/useAppFetch";
import { fetchMovies } from "src/services";
import { SearchHeader } from "./components/SearchHeader";

export const Search = () => {
  const [search, setSearch] = React.useState("");
  const { data, loading, error, refetch, reset } = useAppFetch(
    () => fetchMovies({ query: search }),
    false
  );

  React.useEffect(() => {
    const timeOutId = setTimeout(async () => {
      if (search.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [search]);
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />
      {/* <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto" /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Conditional condition={!loading && !error}>
            <MovieCard {...item} />
          </Conditional>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        className="px-5"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <SearchHeader
            loading={loading}
            error={error}
            movies={data}
            search={search}
            setSearch={setSearch}
          />
        }
      />
      {/* <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto"/>
      </ScrollView> */}
    </View>
  );
};
