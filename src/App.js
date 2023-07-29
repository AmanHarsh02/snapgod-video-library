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
import { Navbar, PageWrapper } from "./components/index";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Categories />
            </PageWrapper>
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <PageWrapper>
              <Category />
            </PageWrapper>
          }
        />
        <Route
          path="/video/:videoId"
          element={
            <PageWrapper>
              <Video />
            </PageWrapper>
          }
        />
        <Route
          path="/explore"
          element={
            <PageWrapper>
              <Explore />
            </PageWrapper>
          }
        />
        <Route
          path="/playlists"
          element={
            <PageWrapper>
              <Playlists />
            </PageWrapper>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PageWrapper>
              <Playlist />
            </PageWrapper>
          }
        />
        <Route
          path="/watch-later"
          element={
            <PageWrapper>
              <WatchLater />
            </PageWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
