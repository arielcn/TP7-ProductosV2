import { useContext } from "react";
import CardProd from "../components/CardProd";
import { CarritoContext } from "../context/carritoContext";

const Carrito = () => {
    const {carrito, setCarrito} = useContext(CarritoContext);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Carrito</h1>
            <div className="row">
                {condicion ? carrito.map(prod => <div className="mb-3 col-sm-4"><CardProd producto={prod} /></div>) : falso}
            </div>
        </div>
    )
}

export default Carrito;