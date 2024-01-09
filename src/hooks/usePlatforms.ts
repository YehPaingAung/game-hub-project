import platforms from "../data/platforms";
// import { useData } from "./useData";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});
