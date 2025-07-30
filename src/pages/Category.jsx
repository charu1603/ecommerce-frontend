

import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProductsByCategory } from "../data/product";
import { Car, Bike, Headset, Loader } from "lucide-react";
const Category = () => {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState("name");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);

  const products = getProductsByCategory(categoryName);

  const filteredAndSortedProducts = useMemo(() => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-high":
        return filtered.sort((a, b) => b.price - a.price);
      case "name":
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [products, sortBy, priceRange]);

  const categoryIcons = {
    headphones: <Headset />,
    bikes: <Bike />,
    cars: <Car />,
    cosmetics: <Loader />,
  };

  return (
    <div className="p-6 pt-20">
      {/* Category Header */}
      <div className="flex items-center space-x-3 my-6">
        <span className="text-3xl">{categoryIcons[categoryName]}</span>
        <h1 className="text-3xl font-bold text-gray-800 capitalize">
          {categoryName}
        </h1>
        <span className="text-gray-500">
          ({filteredAndSortedProducts.length} products)
        </span>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white flex justify-between rounded-lg shadow-sm p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2"
          >
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>Filters</span>
          </button>

          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Price Range Filter */}
        <div
          className={`pt-4 border-gray-200 ${
            showFilters ? "block" : "hidden lg:block"
          }`}
        >
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">
              Price Range:
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([
                    Number.parseInt(e.target.value) || 0,
                    priceRange[1],
                  ])
                }
                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                placeholder="Min"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([
                    priceRange[0],
                    Number.parseInt(e.target.value) || 10000,
                  ])
                }
                className="w-20 border border-gray-300 rounded px-2 py-1 text-sm"
                placeholder="Max"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No products found
          </h3>
          <p className="text-gray-500">
            Try adjusting your filters or search criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Category;
