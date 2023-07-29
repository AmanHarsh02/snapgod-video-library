import { useEffect } from "react";
import { VideoCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function WatchLater() {
  const { savedVideos } = useData();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1>Watch Later</h1>

      {savedVideos.length <= 0 && (
        <p className="my-6">Start saving some videos to watch them later!</p>
      )}

      {savedVideos.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
          {savedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}
    </div>
  );
}
