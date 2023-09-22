import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from 'primereact/rating';
import { Button } from "react-bootstrap";

const Detalle = (props) => {
    const { prodId } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/" + prodId)
            .then((res) => {
                setProducto(res.data)
            })
    })

    let precioDescuento = (producto.price * producto.discountPercentage) / 100;
    precioDescuento = producto.price - precioDescuento;

    return (
        <div className="container mt-5">
            <div className="row">
                <div class="col-md-6">
                    <img src={producto.thumbnail} alt="imagen"></img>
                </div>
                <div class="col-md-6 bg-light">
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <h2><del>${producto.price}</del> ${precioDescuento} {producto.discountPercentage}% OFF</h2>
                    <Rating style={{ display: 'flex' }} cancel={false} value={producto.rating} stars={5} />
                    <Button className="mt-4 me-3"><b>Comprar</b></Button>
                    <Button className="mt-4" variant="outline-warning"><b>Agregar al carrito</b></Button>
                </div>
            </div>
        </div>
    );
};

export default Detalle;