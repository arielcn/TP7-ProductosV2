import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CarritoContext } from '../context/carritoContext';

function CardCarrito({ producto }) {
    const { carrito, setCarrito } = useContext(CarritoContext);
    const borrar = (producto) => {
        const carritoNuevo = carrito.filter(p => p.id !== producto.id);
        setCarrito(carritoNuevo);
    }

    return (
        <div className='mb-3 col-sm-3'>
            <Card style={{ height: '100%' }}>
                <Card.Img style={{ height: '100%' }} variant="top" src={producto.thumbnail} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        ${producto.price}
                    </Card.Text>
                    <Button onClick={() => { borrar(producto) }}>Borrar del carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardCarrito;