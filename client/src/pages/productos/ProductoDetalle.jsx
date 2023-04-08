import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const ProductoDetalle = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/people/${id}`);
            setProducto(respuesta.data);
        }

        getData();

    }, [id])

    return (
        <div>
            <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <br />
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">{producto.precio} Gs</p>
                <Link className="btn btn-secondary" to="/" >Volver</Link>
            </div>
        </div>
    )
}

export default ProductoDetalle