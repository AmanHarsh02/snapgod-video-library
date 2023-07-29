import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { SearchBar } from "../index";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-2 pb-6">
      <Link to="/">
        <h2>SnapGOD</h2>
      </Link>
      <SearchBar />
      <NotificationIcon size={24} className="cursor-pointer fill-gray-300" />
    </nav>
  );
}
