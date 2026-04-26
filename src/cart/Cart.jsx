import CartItem from "./CartItem.jsx";

export default function Cart({ cart, updateQuantity }) {
  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items yet!</p>}

      {cart.map((item) => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} />
      ))}
    </section>
  );
}
