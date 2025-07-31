import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const { getTotalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-4 py-2 md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link to="/cart" className="relative">
          <ShoppingCart />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Link>
      </div>

      {open && (
        <div className="fixed top-12 left-0 right-0 bg-white shadow-md z-40 px-4 py-4 md:hidden">
          <NavLinks onClick={() => setOpen(false)} />
        
        </div>
      )}
    </>
  );
};

export default MobileNav;
