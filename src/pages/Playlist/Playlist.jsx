import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import { VideoCard } from "../../components";
import { useEffect } from "react";

export function Playlist() {
  const { playlistId } = useParams();
  const { playlists, videos } = useData();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const selectedPlaylist = playlists.find(({ id }) => id === +playlistId);
  const { videos: playlist } = selectedPlaylist ?? "";

  const playlistVideos = videos.filter(({ _id }) =>
    playlist?.includes(String(_id))
  );

  return (
    <div>
      <h1>Playlists</h1>

      {playlists.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
          {playlistVideos.map((video, i) => {
            return <VideoCard video={video} key={i} />;
          })}
        </div>
      )}
    </div>
  );
}
