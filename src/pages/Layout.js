import { Link } from "react-router-dom";
const Layout = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/detalle-prod">Detalle</Link>
            <Link to="/contacto">Contacto</Link>
            <Link></Link>
        </nav>
    );
};

export default Layout;
