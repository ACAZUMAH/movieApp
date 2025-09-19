export const API_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_ACCESS_TOKEN}`,
    accept: "application/json",
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endPoint = query
    ? `${API_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${API_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endPoint, {
    method: "GET",
    headers: API_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }
  
  const data = await response.json();

  return data.results;
};
