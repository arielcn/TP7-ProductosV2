import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import CardProd from "../components/CardProd";

const Home = () => {
  const [productos, setProductos] = useState([]);

  const limit = 100;

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`)
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
        {productos.slice(0, 6).map(prod => <CardProd className='col-sm-3' producto={prod} />)}
      </div>
    </div>
  );
};

export default Home;
