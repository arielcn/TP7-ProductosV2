import { useContext } from "react";
import CardCarrito from "../components/CardCarrito";
import { CarritoContext } from "../context/carritoContext";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const Carrito = () => {
    const {carrito, setCarrito} = useContext(CarritoContext);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Carrito</h1>
            <div className="row">
                {carrito.length > 0 ? carrito.map(prod => <CardCarrito producto={prod} />) : <h1>Tu carrito está vacio...</h1>}
            </div>
            <Button as={Link} to={'/check-out'} size='lg' variant="success" className='mt-3'>Comprar</Button>
        </div>
    )
}

export default Carrito;