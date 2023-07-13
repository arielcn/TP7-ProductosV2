import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Detalle from "./components/Detalle";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/detalle-prod" element={<Detalle />}></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
