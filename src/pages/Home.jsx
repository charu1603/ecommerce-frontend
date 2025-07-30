import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import { Car, Bike, Headset } from "lucide-react";
const Home = () => {
  const categories = [
    { name: "Headphones", key: "headphones", icon: <Headset /> },
    { name: "Bikes", key: "bikes", icon: <Bike /> },
    { name: "Cars", key: "cars", icon: <Car /> },
    { name: "Cosmetics", key: "cosmetics", icon: "💄" },
  ];

  const getProductsByCategory = (category) => {
    return products
      .filter((product) => product.category === category)
      .slice(0, 4);
  };

  return (
    <div className="p-6 pt-20">
      <Banner />

      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.key);

        return (
          <section key={category.key} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h2>
              </div>
              <Link
                to={`/category/${category.key}`}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
              >
                <span>See More</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
