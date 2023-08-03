import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Productos = (props) => {
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
          .then((res) => {
            props.setProductos(res.data)
          });
      });
    return (
        <Card></Card>
    );
};

export default Productos;