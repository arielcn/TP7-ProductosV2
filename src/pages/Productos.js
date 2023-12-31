import { useState, useEffect } from "react";
import axios from "axios";
import CardProd from "../components/CardProd";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [categorias, setCategorias] = useState([]);
  const limit = 18;
  const skip = 9

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => {
        setProductos(res.data.products)
      });

    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        setCategorias(res.data)
      })
  }, []);

  const buscarProd = (e) => {
    e.preventDefault();
    axios.get('https://dummyjson.com/products/search?q=' + buscar)
      .then((res) => {
        setProductos(res.data.products)
      })
  };

  const skipearProd = () => {
    axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then((res) => {
        setProductos(res.data.products)
      })
  }

  const volverSkip = () => {
    axios.get(`https://dummyjson.com/products?skip=-${skip}&limit=${limit}`)
      .then((res) => {
        setProductos(res.data.products)
      })
  }

  const filtrarCat = (cat) => {
    axios.get('https://dummyjson.com/products/category/' + cat)
      .then((res) => {
        setProductos(res.data.products)
      })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-11">
          <Form onSubmit={buscarProd}>
            <Row>
              <Col xs="auto">
                <Form.Control onChange={e => setBuscar(e.target.value)}
                  type="text"
                  placeholder="Busca productos..."
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button variant="warning" type="submit">Buscar</Button>
              </Col>
            </Row>
            <ion-icon size='large' name="arrow-back-outline" onClick={() => { volverSkip() }}></ion-icon>
            <ion-icon size='large' name="arrow-forward-outline" className='float-end' onClick={() => { skipearProd() }}></ion-icon>
          </Form>
        </div>
        <div className="col-md-1">
          <NavDropdown className="mb-5" title="Categorías" id="basic-nav-dropdown">
            {categorias.map(cat => <NavDropdown.Item onClick={() => filtrarCat(cat)}>{cat}</NavDropdown.Item>)}
          </NavDropdown>
        </div>
      </div>


      <div className="row">
        {
          productos.map(prod => <div className="mb-3 col-sm-4"><CardProd producto={prod} /></div>)
        }
      </div>
      <ion-icon size='large' name="arrow-back-outline" onClick={() => { volverSkip() }}></ion-icon>
      <ion-icon size='large' name="arrow-forward-outline" className='float-end' onClick={() => { skipearProd() }}></ion-icon>
    </div>
  );
};

export default Productos;