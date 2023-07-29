import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import { useEffect, useState } from "react";
import { VideoCard } from "../../components/index";

export function Category() {
  const { categoryName } = useParams();
  const { videos, getVideosByCategory } = useData();
  const [videosByCategory, setVideosByCategory] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const videosByCategory = getVideosByCategory(categoryName);
    setVideosByCategory(videosByCategory, categoryName);
  }, [videos]);

  return (
    <div>
      <h1>{categoryName}</h1>

      {videosByCategory.length > 0 && (
        <div className="my-6 flex gap-4 justify-center md:justify-start  flex-wrap">
          {videosByCategory.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      )}
    </div>
  );
}
