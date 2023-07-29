import { VideoCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { searchedVideos } = useData();

  return (
    <div>
      <h1>Explore</h1>

      {searchedVideos.length > 0 && (
        <div className="my-6 flex gap-4 flex-wrap">
          {searchedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}
    </div>
  );
}
