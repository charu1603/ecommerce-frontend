import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-gray-500">
                ₹{Math.round(p.price * 80)} × {p.quantity}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(p.id, -1)}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{p.quantity}</span>
              <button
                onClick={() => updateQuantity(p.id, 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
      <div className="text-right mt-6 text-xl font-semibold">
        Total: ₹{Math.round(total * 80)}
      </div>
    </div>
  );
}
