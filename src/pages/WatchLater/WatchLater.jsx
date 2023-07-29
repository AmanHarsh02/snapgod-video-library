import { VideoCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function WatchLater() {
  const { savedVideos } = useData();

  return (
    <div>
      <h1>Watch Later</h1>

      {savedVideos.length > 0 && (
        <div className="my-6 flex gap-4 flex-wrap">
          {savedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}
    </div>
  );
}
