import { useEffect } from "react";
import { CategoryCard } from "../../components";
import { useData } from "../../contexts/DataContext";

export function Categories() {
  const { categories } = useData();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <h1>Categories</h1>

      <div className="my-6 flex gap-4 justify-center md:justify-start flex-wrap">
        {categories.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })}
      </div>
    </div>
  );
}
