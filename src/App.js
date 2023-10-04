import "./App.css"
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import TaskListContainer from "./Components/TaskListContainer/TaskListContainer";
import { Home } from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ProductoById from "./Pages/ProductoById";
import { Contacto } from "./Pages/Contacto";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/productos" element={<TaskListContainer />}/>
            <Route exact path="/productos/:productoNombre" element={<ProductoById />}/>
            {/* <Route exact path="/categoria/" element={<ProductoByCategoria />}/> */}
            <Route exact path="/contacto" element={<Contacto />}/>
            <Route exact path="*" element={<h1>#404 Not Found#</h1>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
