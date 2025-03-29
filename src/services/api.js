const BASE_URL = "https://api.jikan.moe/v4";

export const getPopularAnimes = async () => {
  const min = 1;
  const max = 5;
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const response = await fetch(
    `${BASE_URL}/top/anime?filter=bypopularity&page=${randomInt}`
  );
  const data = await response.json();
  return data.data;
};

export const searchAnimes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/anime?q=${encodeURIComponent(query)}&sfw=true`
  );
  const data = await response.json();
  return data.data;
};
