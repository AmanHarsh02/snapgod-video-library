import { createContext, useContext, useEffect, useReducer } from "react";
import { categories } from "../db/categoriesData";
import { videos } from "../db/videosData";
import { dataReducer, initialDataState } from "../reducers/dataReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const storedVideos = localStorage.getItem("videos");
  const storedPlaylists = localStorage.getItem("playlists");

  useEffect(() => {
    dataDispatch({ type: "SET_CATEGORIES", payload: categories });

    if (storedVideos) {
      dataDispatch({ type: "SET_VIDEOS", payload: JSON.parse(storedVideos) });
    } else {
      dataDispatch({ type: "SET_VIDEOS", payload: videos });
    }

    if (storedPlaylists) {
      dataDispatch({
        type: "SET_PLAYLISTS",
        payload: JSON.parse(storedPlaylists),
      });
    }
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
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  const handleNotes = (videoId, note, action) => {
    let selectedVideo = dataState.videos.find(({ _id }) => _id === +videoId);
    let updatedVideos = [...dataState.videos];
    let updatedNotes = [];

    if (action === "add") {
      updatedNotes = selectedVideo?.notes
        ? [
            ...selectedVideo.notes,
            {
              id: selectedVideo?.notes?.length + 1,
              note,
            },
          ]
        : [{ id: 1, note }];
    } else if (action === "edit") {
      updatedNotes = selectedVideo.notes.map((currNote) => {
        if (+currNote.id === +note.id) {
          return { ...currNote, note: note.note };
        }
        return { ...currNote };
      });
    } else if (action === "delete") {
      updatedNotes = selectedVideo.notes.filter(
        (currNote) => +currNote.id !== +note.id
      );
    }

    updatedVideos = updatedVideos.map((video) => {
      if (video._id === +videoId) {
        return { ...selectedVideo, notes: updatedNotes };
      }
      return { ...video };
    });

    dataDispatch({ type: "SET_VIDEOS", payload: updatedVideos });
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  const handleAddToPlaylist = (videoId, playlist) => {
    let updatedPlaylists = [...dataState.playlists];
    const playlistExists = updatedPlaylists.find(
      ({ id }) => id === +playlist?.id
    );

    if (playlistExists) {
      const newPlaylist = {
        ...playlist,
        videos: [...playlist.videos, videoId],
      };

      updatedPlaylists = updatedPlaylists.map((list) => {
        if (list.id === +playlist?.id) {
          return { ...newPlaylist };
        }
        return { ...list };
      });
    } else {
      const newPlaylist = {
        ...playlist,
        id:
          updatedPlaylists.length > 0
            ? updatedPlaylists.slice(-1)[0].id + 1
            : 1,
        videos: [videoId],
      };

      updatedPlaylists = [...updatedPlaylists, newPlaylist];
    }

    dataDispatch({ type: "SET_PLAYLISTS", payload: updatedPlaylists });
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  const handleDeleteFromPlaylist = (videoId, playlist) => {
    let updatedPlaylists = [...dataState.playlists];
    const newVideos = playlist.videos.filter((id) => id !== videoId);
    const newPlaylist = { ...playlist, videos: newVideos };

    updatedPlaylists = updatedPlaylists.map((list) => {
      if (list.id === playlist.id) {
        return { ...newPlaylist };
      }
      return { ...list };
    });

    dataDispatch({ type: "SET_PLAYLISTS", payload: updatedPlaylists });
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  const handleDeletePlaylist = (playlistId) => {
    const updatedPlaylists = dataState.playlists.filter(
      ({ id }) => id !== playlistId
    );

    dataDispatch({ type: "SET_PLAYLISTS", payload: updatedPlaylists });
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
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
        handleNotes,
        playlists: dataState.playlists,
        handleAddToPlaylist,
        handleDeleteFromPlaylist,
        handleDeletePlaylist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
