import { useState, useEffect } from "react";
import axios from "axios";
import CardProd from "../components/CardProd";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const limit = 100;

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        setProductos(res.data.products)
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {
          productos.map(prod => <div className="mb-3 col-sm-4"><CardProd producto={prod} /></div>)
        }
      </div>
    </div>
  );
};

export default Productos;