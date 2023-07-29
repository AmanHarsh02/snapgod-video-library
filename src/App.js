import { Route, Routes } from "react-router";
import {
  Categories,
  Category,
  Explore,
  Playlist,
  Playlists,
  Video,
  WatchLater,
} from "./pages/index";
import { Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlist/:playListId" element={<Playlist />} />
        <Route path="/watch-later" element={<WatchLater />} />
      </Routes>
    </div>
  );
}

export default App;
