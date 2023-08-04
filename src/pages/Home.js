import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";
import CardProd from "../components/Card";

const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
      axios.get('https://dummyjson.com/products')
        .then((res) => {
          setProductos(res.data)
        }, []);
    });
    return (
        <div className="container">
            <h1 className="text-center">Las mejores ofertas</h1>
            <Carousel />
            <CardProd />
        </div>
    );
};

export default Home;
