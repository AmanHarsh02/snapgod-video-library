import { NavLink } from "react-router-dom";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { MdExplore as ExploreIcon } from "react-icons/md";
import { BsFillStopwatchFill as WatchLaterActiveIcon } from "react-icons/bs";
import { MdPlaylistAdd as AddToPlaylistIcon } from "react-icons/md";

export function BottomNavigation() {
  return (
    <div data-nav="side-nav" className="grow flex gap-0 justify-evenly">
      <NavLink
        to="/"
        className={({ isActive }) => {
          const classes =
            "flex items-center gap-2 p-2 w-max text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div className="bg-gray-700 p-2 rounded-lg ">
          <HomeIcon />
        </div>
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) => {
          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div className="bg-gray-700 p-2 rounded-lg">
          <ExploreIcon />
        </div>
      </NavLink>

      <NavLink
        to="/playlists"
        className={({ isActive }) => {
          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div className="bg-gray-700 p-2 rounded-lg">
          <AddToPlaylistIcon />
        </div>
      </NavLink>

      <NavLink
        to="/watch-later"
        className={({ isActive }) => {
          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div className="bg-gray-700 p-2 rounded-lg">
          <WatchLaterActiveIcon />
        </div>
      </NavLink>
    </div>
  );
}
