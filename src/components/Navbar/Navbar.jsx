import { IoNotifications as NotificationIcon } from "react-icons/io5";
import { SearchBar } from "../index";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-2 pb-6">
      <h2>SnapGOD</h2>
      <SearchBar />
      <NotificationIcon size={24} className="cursor-pointer fill-gray-300" />
    </nav>
  );
}
