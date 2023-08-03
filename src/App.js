import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Detalle from "./pages/Detalle";
import Contacto from "./pages/Contacto";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [productos, setProductos] = useState([]);

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/productos" element={<Productos productos={productos} setProductos={setProductos} />}></Route>
        <Route path="/detalle-prod" element={<Detalle />}></Route>
        <Route path="/contacto" element={<Contacto />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
