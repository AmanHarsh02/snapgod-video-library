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

  const getVideosByCategory = (categoryName) => {
    const videosByCategory = dataState.videos.filter(
      ({ category }) => category === categoryName
    );

    return videosByCategory;
  };

  const mostWatchedVideos = [...dataState.videos]
    .sort((a, b) => b.views - a.views)
    .slice(0, 8);

  const applySearch = (videos) => {
    let filteredVideos = [...videos];
    const searchValue = dataState.searchValue.trim().toLowerCase();

    if (searchValue.length > 0) {
      filteredVideos = filteredVideos.filter(({ title }) =>
        title.trim().toLowerCase().includes(searchValue)
      );
    }

    return filteredVideos;
  };

  const handleWatchLater = (videoId) => {
    const updatedVideos = dataState.videos.map((video) => {
      if (video._id === videoId) {
        if (!video?.saved) {
          return { ...video, saved: true };
        } else {
          return { ...video, saved: false };
        }
      }
      return { ...video };
    });

    dataDispatch({ type: "SET_VIDEOS", payload: updatedVideos });
  };

  const handleAddNote = (videoId, note) => {
    const selectedVideo = dataState.videos.find(({ _id }) => _id === +videoId);
    console.log(selectedVideo, selectedVideo?.notes, videoId);

    if (selectedVideo?.notes) {
      selectedVideo.notes.push(note);
    } else {
      selectedVideo.notes = [note];
    }

    const updatedVideos = dataState.videos.map((video) => {
      if (video._id === videoId) {
        if (!video?.saved) {
          return { ...selectedVideo };
        }
      }
      return { ...video };
    });

    dataDispatch({ type: "SET_VIDEOS", payload: updatedVideos });
  };

  const searchedVideos = applySearch(dataState.videos);

  const savedVideos = dataState.videos.filter(({ saved }) => saved);

  return (
    <DataContext.Provider
      value={{
        categories: dataState.categories,
        videos: dataState.videos,
        searchValue: dataState.searchValue,
        getVideosByCategory,
        searchedVideos,
        dataDispatch,
        mostWatchedVideos,
        handleWatchLater,
        savedVideos,
        handleAddNote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
