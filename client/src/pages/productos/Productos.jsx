import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../productos/producto.css'

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people`);
      setProductos(respuesta.data);
    }

    getData();
  
  }, []);
  


  return (
    <>
      <h1>Todos los Productos</h1>
      <table className='tabla'>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          { productos.map( (producto, index) => <tr key={index} >
            <td><Link className='titulos' to={`/productos/${producto._id}`}><h6>{ producto.titulo }</h6></Link></td>
          </tr> ) }
        </tbody>
      </table>
    </>
  )
}

export default Productos