import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { useData } from "../../contexts/DataContext";
import { useState } from "react";
import { ExistingPlaylists } from "../index";

export function AddOrCreatePlaylistModal({
  mode,
  setShowPlaylistModal,
  videoId,
}) {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");
  const { playlists, handleAddToPlaylist } = useData();

  const handleClick = (e) => {
    const clickedOn = e.target.closest("[data-modal]");

    if (!clickedOn) {
      setShowPlaylistModal(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-20"
    >
      <div
        data-modal="modal"
        className="flex flex-col gap-4 min-w-[20%] md:max-w-[40%] bg-gray-700 p-4 rounded-lg"
      >
        <div
          className="cursor-pointer self-end"
          onClick={() => setShowPlaylistModal(false)}
        >
          <CloseIcon size={18} />
        </div>

        {playlists.length > 0 && mode === "add" && (
          <div>
            <p>Add to existing playlists</p>
            <ExistingPlaylists
              playlists={playlists}
              videoId={videoId}
              setShowPlaylistModal={setShowPlaylistModal}
            />
          </div>
        )}

        <input
          type="text"
          placeholder="Playlist name..."
          value={playlistName}
          className="rounded-lg outline-none p-2 bg-gray-600"
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Playlist description..."
          value={playlistDesc}
          className="rounded-lg outline-none p-2 bg-gray-600"
          onChange={(e) => setPlaylistDesc(e.target.value)}
        />

        <button
          onClick={() => {
            if (
              playlistName.trim().length > 0 &&
              playlistDesc.trim().length > 0
            ) {
              handleAddToPlaylist(videoId, { playlistName, playlistDesc });
              setShowPlaylistModal(false);
            }
          }}
          className="bg-[#FF7551] rounded-lg p-2"
        >
          Create New Playlist
        </button>
      </div>
    </div>
  );
}
