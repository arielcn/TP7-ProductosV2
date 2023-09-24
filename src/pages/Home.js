import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import axios from "axios";
import Carousel from "../components/Carousel";
import CardProd from "../components/CardProd";
import { CarritoContext } from "../context/carritoContext";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const limit = 30;

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        setProductos(res.data.products)
      });
  }, []);

  const getRandom = () => {
    return productos.sort(() => 0.5 - Math.random()).slice(0, 6);
  }
  
  function anadirAlCarrito(producto) {
    setCarrito(producto)
  };

  return (
    <div className="container">
      <h1 className="text-center">Las mejores ofertas</h1>
      <Carousel productos={getRandom()} />
      <CarritoContext.Provider value={anadirAlCarrito}>
        <div className="row mt-5">
          {productos.slice(0, 6).map(prod => <div className='col-sm-4 mb-3' > <CardProd producto={prod} /> </div>)}
        </div>
      </CarritoContext.Provider>
    </div>
  );
};

export default Home;
