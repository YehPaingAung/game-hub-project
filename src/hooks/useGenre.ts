import { useData } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenre = () => useData<Genre>("/genres");
// export const useGenre = () => ({ data: genres, isLoading: false, error: null });
