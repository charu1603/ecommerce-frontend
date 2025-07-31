import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import MobileNav from "./components/MobileNav";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
 <CartProvider>
      <Router>
        <div className="bg-gray-50">
       
          <Header/>
   <MobileNav />
     
          <div className="flex pt-16">
       
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

       
            <main className="flex-1 ml-0 md:ml-64 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
