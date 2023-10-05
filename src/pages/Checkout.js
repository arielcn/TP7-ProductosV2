import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";

const Checkout = () => {
    const { carrito, setCarrito } = useContext(CarritoContext);
    let acum = 0;
    let totalPrice = carrito.forEach(producto => {
        acum = producto.price + acum
    });

    return (
        <div className="container mt-3">
            <h1>El total de tu carrito es ${acum}</h1>
            <form>
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" required/>
                    <label for="inputPiso">Piso</label>
                    <input type="text" class="form-control col-sm-6" id="inputPiso" placeholder="Ej: 1"/>
                    <label for='inputDepto'>Departamento</label>
                    <input type="text" class="form-control col-sm-6" id="inputDepto" placeholder="Ej: B"/>
                </div>
                <div class="form-group col-sm-4">
                        <label for="inputState">Ciudad</label>
                        <select id="inputState" class="form-control" required>
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                <div class="form-group mt-5">
                    <label for="inputAddress2">Numero de tarjeta</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="XXXX-XXXX-XXXX-XXXX" required/>
                </div>
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <label for="inputCity">CVV</label>
                        <input type="text" class="form-control" id="inputCity" required/>
                    </div>
                    <div class="form-group col-sm-2">
                        <label for="inputZip">Codigo Postal (CP)</label>
                        <input type="text" class="form-control" id="inputZip" required/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class="form-check-label" for="gridCheck">
                                Recordar mis datos
                            </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Finalizar compra</button>
            </form>
        </div>
    );
};

export default Checkout;