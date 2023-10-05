import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Detalle from "./pages/Detalle";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import Checkout from "./pages/Checkout";
import { CarritoContext } from "./context/carritoContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let cart = localStorage.getItem('carrito');
  
  const [carrito, setCarrito] = useState(cart ? JSON.parse(cart) : []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/detalle-prod/:prodId" element={<Detalle />}></Route>
            <Route path="/contacto" element={<Contacto />} ></Route>
            <Route path="/carrito" element={<Carrito />} ></Route>
            <Route path="/check-out" element={<Checkout />}></Route>
            <Route path="*" element={<h1 className="text-center mt-5">404 page not found</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoContext.Provider>
  );
}

export default App;
