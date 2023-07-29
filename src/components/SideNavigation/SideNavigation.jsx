import { NavLink } from "react-router-dom";
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { MdExplore as ExploreIcon } from "react-icons/md";
import { BsFillStopwatchFill as WatchLaterActiveIcon } from "react-icons/bs";
import { MdPlaylistAdd as AddToPlaylistIcon } from "react-icons/md";
import { useState } from "react";

export function SideNavigation() {
  const [active, setActive] = useState("");

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div
        data-nav="side-nav"
        className=" grow flex flex-col gap-4 items-start"
      >
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
          <p className="hidden lg:block">Home</p>
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
          <p className="hidden lg:block">Explore</p>
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
          <p className="hidden lg:block">Playlists</p>
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
          <p className="hidden lg:block">Watch Later</p>
        </NavLink>
      </div>
    </div>
  );
}
