import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../productos/producto.css'
import DeleteButton from '../../components/DeleteButton';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people`);
      setProductos(respuesta.data);
    }

    getData();
  
  }, []);
  
  const quitarProducto = (productoID) => {
    setProductos(productos.filter((producto) => producto._id !== productoID));
  }


  return (
    <>
      <h1>Todos los Productos</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          { productos.map( (producto, index) => <tr key={index} >
            <td><Link className='titulos' to={`/productos/${producto._id}`}><h6>{ producto.titulo }</h6></Link></td>
            <td>
              <Link className="btn btn-secondary ms-2" to={`/productos/${producto._id}/editar`}>Editar</Link>   
              <DeleteButton id_producto={producto._id} successCallback={quitarProducto} />
            </td>
          </tr> ) }
        </tbody>
      </table>
    </>
  )
}

export default Productos