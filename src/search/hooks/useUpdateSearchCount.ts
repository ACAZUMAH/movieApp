import { ID, Query, TablesDB } from "react-native-appwrite";
import { Movie } from "src/interfaces";
import { appWriteClient } from "src/services";

export const updateSearchCount = async (query: string, movie: Movie) => {
  const database = new TablesDB(appWriteClient);
  try {
    const results = await database.listRows({
      databaseId: `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`,
      tableId: `matrice`,
      queries: [Query.equal("searchTerm", query)],
    });
    
    if(results.rows.length > 0){
        const existingMovie = results.rows[0];
        await database.updateRow({
          databaseId: `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`,
          tableId: `matrice`,
            rowId: existingMovie.$id,
            data: {
                searchTerm: query,
                count: existingMovie.count + 1,
            }
        });
    }else {
        await database.createRow({
          databaseId: `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`,
          tableId: `matrice`,
          rowId: ID.unique(),
            data: {
                searchTerm: query,
                movie_id: String(movie?.id!),
                title: movie?.title!,
                count: 1,
                poster_url: `https://image.tmdb.org/t/p/w500${movie?.poster_path!}`,
            }
        });
    }
  } catch (error)  {
    console.error("Error updating search count:", error);
    throw error;
  }
};
