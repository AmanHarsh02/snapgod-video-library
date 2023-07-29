export const initialDataState = {
  categories: [],
  videos: [],
  playlists: [],
  searchValue: "",
};

export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categories: payload };
    case "SET_VIDEOS":
      return { ...state, videos: payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: payload };
    case "UPDATE_VIDEOS":
      return { ...state, videos: payload };
    case "SET_PLAYLISTS":
      return { ...state, playlists: payload };
    default:
      return { ...state };
  }
};
