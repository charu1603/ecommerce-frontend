import { Link, useLocation } from "react-router-dom";
import { Car, Bike, Headset, Loader, Home } from "lucide-react";
const Sidebar = () => {
  const location = useLocation();

  const categories = [
    { name: "Headphones", icon: <Headset />, path: "/category/headphones" },
    { name: "Bikes", icon: <Bike />, path: "/category/bikes" },
    { name: "Cars", icon: <Car />, path: "/category/cars" },
    { name: "Cosmetics", icon: <Loader />, path: "/category/cosmetics" },
  ];

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg z-40">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === "/"
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">
              <Home />
            </span>
            <span>Home</span>
          </Link>

          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === category.path
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Quick Links
          </h3>
          <div className="space-y-2">
            <Link
              to="/cart"
              className="block text-sm text-gray-600 hover:text-blue-600"
            >
              My Cart
            </Link>
            <Link
              to="/orders"
              className="block text-sm text-gray-600 hover:text-blue-600"
            >
              Orders
            </Link>
            <Link
              to="/wishlist"
              className="block text-sm text-gray-600 hover:text-blue-600"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
