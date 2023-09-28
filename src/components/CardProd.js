import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/carritoContext';

function CardProd({ producto }) {
    const context = useContext(CarritoContext)
    return (
        <Card style={{height: '100%' }}>
            <Card.Img style={{ height: '100%' }} variant="top" src={producto.thumbnail} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    ${producto.price}
                </Card.Text>
                <Button as={Link} to={`/detalle-prod/${producto.id}`} className='me-1'>Comprar</Button>
                <Button onClick={ () => {context.anadirAlCarrito(producto)}}>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default CardProd;