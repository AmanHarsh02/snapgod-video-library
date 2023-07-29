import { Link, useNavigate } from "react-router-dom";
import {
  BsStopwatch as WatchLaterIcon,
  BsFillStopwatchFill as WatchLaterActiveIcon,
} from "react-icons/bs";
import { useData } from "../../contexts/DataContext";

export function VideoCard({ video }) {
  const { handleWatchLater } = useData();
  const { _id, title, thumbnail, views, creator, saved } = video ?? "";
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    const clickedOn = e.target.closest("[data-watch]");

    if (clickedOn) {
      handleWatchLater(_id);
    } else {
      navigate(`/video/${_id}`);
    }
  };

  return (
    <div onClick={handleCardClick} className="cursor-pointer">
      <div className="group bg-gray-800 max-w-[300px] rounded-2xl overflow-hidden h-full">
        <div className="relative overflow-hidden h-[200px]">
          <img
            src={thumbnail}
            alt={title}
            className="w-[100%] h-[100%] object-cover group-hover:scale-110 transition-all duration-500"
          />

          <div
            data-watch="Watch Later"
            className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
          >
            {saved ? (
              <WatchLaterActiveIcon size={18} />
            ) : (
              <WatchLaterIcon size={18} />
            )}
          </div>
        </div>

        <div className="p-2 flex flex-col gap-2">
          <div className="flex items-end justify-between -mt-8 z-10">
            <p className="text-gray-400">{creator}</p>

            <div className="border border-gray-200 rounded-full p-1 pb-1.5 px-1">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt={creator}
                className="max-w-[3.5rem] rounded-full shadow-md shadow-gray-900"
              />
            </div>
          </div>

          <strong>{title}</strong>

          <small className="text-gray-400">
            {views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views} views
          </small>
        </div>
      </div>
    </div>
  );
}
