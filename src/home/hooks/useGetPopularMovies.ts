import { Query, TablesDB } from "react-native-appwrite";
import { TrendingMovie } from "src/interfaces";
import { appWriteClient } from "src/services";

export const useGetPopularMovies = async (): Promise<
  TrendingMovie[] | undefined
> => {
  const database = new TablesDB(appWriteClient);
  try {
    const results = await database.listRows({
      databaseId: `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`,
      tableId: `matrice`,
      queries: [Query.limit(5), Query.orderDesc("count")],
    });
    return results.rows as unknown as TrendingMovie[];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return undefined;
  }
};
 