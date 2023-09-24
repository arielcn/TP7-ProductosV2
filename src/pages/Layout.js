import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                            height="50px"
                            className="d-inline-block align-top"
                            alt="Amazon Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                            <Nav.Link as={Link} to="/carrito"><img width='50px' src="https://static.vecteezy.com/system/resources/previews/011/187/829/non_2x/shopping-cart-icon-vector.jpg"></img></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>

    );
};

export default Layout;
