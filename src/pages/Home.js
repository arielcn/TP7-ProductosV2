import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import CardProd from "../components/CardProd";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        setProductos(res.data.products)
      });
  }, []);

  const getRandom = () => {
    return productos.sort(() => 0.5 - Math.random()).slice(0, 6);
  }
  
  return (
    <div className="container">
      <h1 className="text-center">Las mejores ofertas</h1>
      <Carousel productos={getRandom()} />
        <div className="row mt-5">
          {productos.slice(0, 6).map(prod => <div className='col-sm-4 mb-3' > <CardProd producto={prod} /> </div>)}
        </div>
    </div>
  );
};

export default Home;
