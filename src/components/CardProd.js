import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProd(props) {
    console.log(props)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{props.productos.name}</Card.Title>
            <Card.Text>
                {props.productos.price}
            </Card.Text>
            <Button as={Link} to="/productos">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
}

export default CardProd;