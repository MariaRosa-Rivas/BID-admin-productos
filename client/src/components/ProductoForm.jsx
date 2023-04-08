import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const ProductosErrores = Yup.object().shape({
    titulo: Yup.string()
        .min(5, 'El titulo debe tener como minimo 5 caracteres')
        .max(70, 'No puede ser muy largo el titulo.')
        .required('Requerido'),
    descripcion: Yup.string()
        .required('El descripcion es requerido.')
        .min(5, 'Se necesita como minumo 10 caracteres.')
        .max(100, 'no puede superar los 100 caracteres'),
    precio: Yup.number()
        .integer('Debe ser numero entero')
        .required('Se necesita la precio si o si.')
        .positive('No puede ser negativo'),
});

const ProductoForm = ({initialValues, botonTexto, onSubmit}) => {

  return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ProductosErrores}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="titulo" className="form-control" placeholder="titulo" />
                {touched.titulo && errors.titulo && <div className="ms-3 mt-1 text-danger">{errors.titulo}</div>}
                <Field name="descripcion" className="form-control mt-2" placeholder="descripcion"/>
                {touched.descripcion && errors.descripcion && <div className="ms-3 mt-1 text-danger">{errors.descripcion}</div>}
                <Field name="precio" type="number" className="form-control mt-2" placeholder="precio" />
                {touched.precio && errors.precio && <div className="ms-3 mt-1 text-danger">{errors.precio}</div>}
                <button type="submit" className="btn btn-secondary mt-5" disabled={!(isValid && dirty)}>{botonTexto} </button>
            </Form>
        )}
    </Formik>
  )
}

export default ProductoForm