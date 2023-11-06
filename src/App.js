import logo from "./logo.svg";
import "./App.css";
import Header from "./Componets/Header";
import Slider from "./Componets/Slider";
import ProductionHouse from "./Componets/ProductionHouse";
import GenreMovieList from "./Componets/GenreMovieList";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
}

export default App;
