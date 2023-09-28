import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/carritoContext';

function CardProd({ producto }) {
    const {carrito, setCarrito} = useContext(CarritoContext);

    const anadirAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    }
    const borrar = (producto) => {
        const carritoNuevo = carrito.filter(p => p.id !== producto.id);
        setCarrito(carritoNuevo);
    }

    return (
        <Card style={{height: '100%' }}>
            <Card.Img style={{ height: '100%' }} variant="top" src={producto.thumbnail} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    ${producto.price}
                </Card.Text>
                <Button as={Link} to={`/detalle-prod/${producto.id}`} className='me-1'>Comprar</Button>
                <Button onClick={ () => {anadirAlCarrito(producto)}} className='me-1'>Añadir al carrito</Button>
                <Button onClick={ () => {borrar(producto)}}>Borrar del carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProd;