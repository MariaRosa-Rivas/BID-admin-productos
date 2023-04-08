import React from 'react'
import ProductoForm from '../../components/ProductoForm'
import axios from 'axios';
import Swal from 'sweetalert2'
import Productos from '../productos/Productos'

const ProductosAdd = () => {
  const initialValues = {
    title: '',
    descripcion: '',
    precio: '$'
  }

  const crearProducto = async(values, actions) => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/people`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado ${respuesta.data.title} perfectamente!`,
            });

            actions.resetForm(initialValues);
        }
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }

  return (
    <>
        <h1>Gerente de Producto</h1>
        <hr />
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <ProductoForm 
                  initialValues={initialValues}
                  botonTexto="Agregar"
                  onSubmit={crearProducto}
                />
            </div>
        </div>
        <hr />
        <Productos />
    </>
  )
}

export default ProductosAdd