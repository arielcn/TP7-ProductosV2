import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Rating } from 'primereact/rating';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductoShape } from "../shapes/prodShape";
import { CarritoContext } from '../context/carritoContext';

const Detalle = (props) => {
    const { prodId } = useParams();
    const [producto, setProducto] = useState([]);
    const {carrito, setCarrito} = useContext(CarritoContext);

    const anadirAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }
    const borrar = (producto) => {
        const carritoNuevo = carrito.filter(p => p.id !== producto.id);
        setCarrito(carritoNuevo);
    }

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/" + prodId)
            .then((res) => {
                setProducto(res.data)
            })
    })

    let precioDescuento = (producto.price * producto.discountPercentage) / 100;
    precioDescuento = Math.ceil(producto.price - precioDescuento);

    return (
        <div className="container mt-5">
            <div className="row">
                <div class="col-md-6">
                    <img src={producto.thumbnail} alt="imagen" width={'100%'}></img>
                </div>
                <div class="col-md-6 bg-light">
                    <h1>{producto.title} </h1>
                    <p>{producto.description}</p>
                    <p>Marca: {producto.brand}</p>
                    <h2><del>${producto.price}</del> ${precioDescuento} {producto.discountPercentage}% OFF</h2>
                    <Rating style={{ display: 'flex', color: '#f0d614' }} cancel={false} value={producto.rating} stars={5}/>
                    <Button as={Link} to={'/check-out'} className="mt-4 me-3"><b>Comprar</b></Button>
                    <Button as={Link} to={'/carrito'} onClick={() => {anadirAlCarrito(producto)}} className="mt-4" variant="outline-warning"><b>Añadir al carrito</b></Button>
                    <Button onClick={ () => {borrar(producto)}}>Borrar del carrito</Button>
                </div>
            </div>
        </div>
    );
};

Detalle.propTypes = {
    producto:ProductoShape
}

export default Detalle;