import { NavLink } from "react-router-dom";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { MdExplore as ExploreIcon } from "react-icons/md";
import { BsFillStopwatchFill as WatchLaterActiveIcon } from "react-icons/bs";
import { MdPlaylistAdd as AddToPlaylistIcon } from "react-icons/md";
import { useState } from "react";

export function BottomNavigation() {
  const [active, setActive] = useState("");

  return (
    <div data-nav="side-nav" className="grow flex gap-0 justify-evenly">
      <NavLink
        to="/"
        className={({ isActive }) => {
          isActive && setActive("Home");

          const classes =
            "flex items-center gap-2 p-2 w-max text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div
          className={`${
            active === "Home" ? "bg-[#FF7551]" : "bg-gray-700 "
          } p-2 rounded-lg`}
        >
          <HomeIcon />
        </div>
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) => {
          isActive && setActive("Explore");

          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div
          className={`${
            active === "Explore" ? "bg-[#FF7551]" : "bg-gray-700 "
          } p-2 rounded-lg`}
        >
          <ExploreIcon />
        </div>
      </NavLink>

      <NavLink
        to="/playlists"
        className={({ isActive }) => {
          isActive && setActive("Playlists");

          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div
          className={`${
            active === "Playlists" ? "bg-[#FF7551]" : "bg-gray-700 "
          } p-2 rounded-lg`}
        >
          <AddToPlaylistIcon />
        </div>
      </NavLink>

      <NavLink
        to="/watch-later"
        className={({ isActive }) => {
          isActive && setActive("Watch Later");

          const classes =
            "flex items-center gap-2 p-2 w-max  text-xl font-medium";

          return isActive
            ? `${classes} text-white font-bold`
            : `${classes} text-gray-400  hover:text-white`;
        }}
      >
        <div
          className={`${
            active === "Watch Later" ? "bg-[#FF7551]" : "bg-gray-700 "
          } p-2 rounded-lg`}
        >
          <WatchLaterActiveIcon />
        </div>
      </NavLink>
    </div>
  );
}
