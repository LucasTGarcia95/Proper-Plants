import PlantCard from "./PlantCard.jsx";
import "../styles/plants.css";

export default function PlantList({ plants, addToCart }) {
  return (
    <section className="plant-list">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </section>
  );
}
