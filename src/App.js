import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Detalle from "./pages/Detalle";
import Contacto from "./pages/Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route path="/detalle-prod/:prodId" element={<Detalle />}></Route>
          <Route path="/contacto" element={<Contacto />} ></Route>
          <Route path="*" element={<h1 className="text-center mt-5">404 page not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
