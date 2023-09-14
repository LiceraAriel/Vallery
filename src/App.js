import "./App.css"
import Navbar from "./Components/Navbar";
import ContenedorSaludo from "./Components/Saludo";

function App() {
  return (
    <div>
      <Navbar />
      <ContenedorSaludo saludo="Bienvenidos al futuro E-commerce"/>
    </div>
  );
}

export default App;
