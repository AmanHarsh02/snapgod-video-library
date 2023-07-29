import { useEffect } from "react";
import { PlaylistCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Playlists() {
  const { playlists } = useData();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1>Playlists</h1>

      {playlists.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
          {playlists.map((playlist) => {
            return <PlaylistCard playlist={playlist} key={playlist.id} />;
          })}
        </div>
      )}
    </div>
  );
}
