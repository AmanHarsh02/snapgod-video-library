import { useEffect } from "react";
import { VideoCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Explore() {
  const { searchedVideos } = useData();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1>Explore</h1>

      {searchedVideos.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
          {searchedVideos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}
    </div>
  );
}
