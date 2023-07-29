import { BiSearch as SearchIcon } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";

export function SearchBar() {
  const { searchValue, dataDispatch } = useData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname !== "/explore") {
      dataDispatch({ type: "SET_SEARCH_VALUE", payload: "" });
    }
  }, [location]);

  return (
    <div className="grow max-w-[50%] flex justify-between items-center gap-2 rounded-lg bg-gray-700 px-2 ">
      <input
        type="text"
        placeholder="Search Videos..."
        className="grow outline-none py-1.5 bg-gray-700"
        value={searchValue}
        onClick={() =>
          location?.pathname !== "/explore" && navigate("/explore")
        }
        onChange={(e) =>
          dataDispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value })
        }
      />
      <SearchIcon className="fill-gray-400" />
    </div>
  );
}
