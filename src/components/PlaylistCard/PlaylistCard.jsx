import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useData } from "../../contexts/DataContext";

export function PlaylistCard({ playlist }) {
  const { videos, handleDeletePlaylist } = useData();
  const { id, playlistName, playlistDesc, videos: playlistVideos } = playlist;
  const navigate = useNavigate();

  const { thumbnail } = videos.find(({ _id }, i) =>
    playlistVideos.includes(String(_id))
  );

  const handleCardClick = (e) => {
    const clickedOn = e.target.closest("[data-watch]");

    if (clickedOn) {
      handleDeletePlaylist(id);
    } else {
      navigate(`/playlist/${id}`);
    }
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <div className="group bg-gray-800 md:min-w-[300px] max-w-[300px] rounded-2xl overflow-hidden h-full">
        <div className="relative overflow-hidden h-[200px]">
          <img
            src={thumbnail}
            alt={playlistName}
            className="w-[100%] h-[100%] object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div
            data-watch="Watch Later"
            className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            <CloseIcon size={18} />
          </div>
        </div>

        <div className="p-2 flex flex-col gap-2">
          <strong>{playlistName}</strong>

          <small className="text-gray-400">{playlistDesc}</small>
        </div>
      </div>
    </div>
  );
}
