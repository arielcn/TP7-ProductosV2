import { useContext } from "react";
import CardProd from "../components/CardProd";
import { CarritoContext } from "../context/carritoContext";

const Carrito = () => {
    const {carrito, setCarrito} = useContext(CarritoContext);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Carrito</h1>
            <div className="row">
                {carrito.length > 0 ? carrito.map(prod => <div className="mb-3 col-sm-4"><CardProd producto={prod} /></div>) : <h1>Tu carrito está vacio...</h1>}
            </div>
        </div>
    )
}

export default Carrito;