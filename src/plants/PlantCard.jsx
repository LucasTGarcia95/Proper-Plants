export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <span className="emoji">{plant.image}</span>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </div>
  );
}
