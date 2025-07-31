
import { Link, useLocation } from "react-router-dom";
import { Car, Bike, Headset, Loader, Home } from "lucide-react";

const categories = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Headphones", icon: <Headset />, path: "/category/headphones" },
  { name: "Bikes", icon: <Bike />, path: "/category/bikes" },
  { name: "Cars", icon: <Car />, path: "/category/cars" },
  { name: "Cosmetics", icon: <Loader />, path: "/category/cosmetics" },
];

const NavLinks = ({ layout = "vertical" }) => {
  const location = useLocation();

  return (
    <div
      className={
        layout === "horizontal"
          ? "flex overflow-x-auto space-x-4"
          : "space-y-2"
      }
    >
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className={`flex items-center ${
            layout === "horizontal" ? "space-x-1 text-sm px-2 py-1" : "space-x-3 px-4 py-3"
          } rounded-lg whitespace-nowrap transition-colors ${
            location.pathname === category.path
              ? "bg-blue-100 text-blue-700"
              : layout === "horizontal"
              ? "text-gray-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">{category.icon}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
