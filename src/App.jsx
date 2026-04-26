import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./plants/PlantList.jsx";
import Cart from "./cart/Cart.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  }

  function updateQuantity(id, amount) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <div className="app">
      <h1>Proper Plants</h1>

      <section className="plants-section">
        <h2>Plants</h2>
        <PlantList plants={PLANTS} addToCart={addToCart} />
      </section>

      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}
