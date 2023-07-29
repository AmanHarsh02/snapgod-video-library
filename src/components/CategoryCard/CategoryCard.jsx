import { Link } from "react-router-dom";

export function CategoryCard({ category }) {
  const { thumbnail, category: categoryName } = category;

  return (
    <Link
      to={`category/${categoryName}`}
      className="group min-w-[300px] relative bg-gray-400 rounded-lg overflow-hidden "
    >
      <img
        src={thumbnail}
        alt={categoryName}
        className="w-[100%] group-hover:scale-125 transition-all duration-500"
      />
      <div className="absolute left-0 right-0 bottom-0 top-0 flex items-end p-2 bg-gradient-to-t from-black">
        <p className="">{categoryName}</p>
      </div>
    </Link>
  );
}
