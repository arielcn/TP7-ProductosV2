import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProd({producto}) {

    return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.thumbnail} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>
                    ${producto.price}
                </Card.Text>
                <Button as={Link} to="/productos">Go somewhere</Button>
            </Card.Body>
            </Card> 
    );
}

export default CardProd;