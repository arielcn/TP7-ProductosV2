import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from 'primereact/rating';

const Detalle = (props) => {
    const { prodId } = useParams();
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/" + prodId)
            .then((res) => {
                setProducto(res.data)
            })
    })
    return (
        <div className="container mt-5">
            <div className="row">
                <div class="col-md-6">
                    <img src={producto.thumbnail} alt="imagen"></img>
                </div>
                <div class="col-md-6">
                    <h1>{producto.title}</h1>
                    <h2>{producto.price}$ {producto.discountPercentage}% OFF</h2>
                    <Rating style={{ display: 'flex' }} cancel={false} value={producto.rating} stars={5} />
                </div>
                <p>{producto.description}</p>
            </div>
        </div>
    );
};

export default Detalle;