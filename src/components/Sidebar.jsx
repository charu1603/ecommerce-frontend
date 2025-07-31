import NavLinks from "./NavLinks";
import {Link} from 'react-router-dom'
const Sidebar = () => (
  <aside className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg z-40 hidden md:block">
    <div className="p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
      <div className="" >
      <NavLinks layout="vertical" />
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
    </div>
  </aside>
);
export default Sidebar;