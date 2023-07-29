import { useData } from "../../contexts/DataContext";

export function ExistingPlaylists({
  playlists,
  videoId,
  setShowPlaylistModal,
}) {
  const { handleAddToPlaylist, handleDeleteFromPlaylist } = useData();

  return (
    <div className="flex gap-4 flex-wrap my-2">
      {playlists.map((playlist) => {
        const existInPlaylist = playlist?.videos?.includes(String(videoId));

        return (
          <div
            className={`cursor-pointer bg-gray-600 px-4 rounded-lg hover:bg-gray-500 ${
              existInPlaylist ? "outline outline-[#FF7551]" : ""
            }`}
            key={playlist.id}
            onClick={() => {
              !existInPlaylist
                ? handleAddToPlaylist(videoId, playlist)
                : handleDeleteFromPlaylist(videoId, playlist);
              setShowPlaylistModal(false);
            }}
          >
            <small>{playlist.playlistName}</small>
          </div>
        );
      })}
    </div>
  );
}
