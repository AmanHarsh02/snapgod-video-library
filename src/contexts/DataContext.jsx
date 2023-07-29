import { createContext, useContext, useEffect, useReducer } from "react";
import { categories } from "../db/categoriesData";
import { videos } from "../db/videosData";
import { dataReducer, initialDataState } from "../reducers/dataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  useEffect(() => {
    dataDispatch({ type: "SET_CATEGORIES", payload: categories });
    dataDispatch({ type: "SET_VIDEOS", payload: videos });
  }, []);

  return (
    <DataContext.Provider
      value={{
        categories: dataState.categories,
        videos: dataState.videos,
        searchValue: dataState.searchValue,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);

//   const applyFilters = (allVideos) => {
//     let filteredVideos = [...allVideos];
//     const searchValue = dataState.searchValue.trim().toLowerCase();

//     if (searchValue.length > 0) {
//       filteredVideos = filteredVideos.filter(({ title }) => {
//         title.trim().toLowerCase().includes(searchValue);
//       });
//     }

//     return filteredVideos;
//   };

//   const filteredVideos = applyFilters(dataState.videos);
