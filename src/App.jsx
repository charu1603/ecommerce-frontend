import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryName" element={<Category />} />
                <Route
                  path="/product/:productId"
                  element={<ProductDetails />}
                />
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
