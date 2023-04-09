import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import NotFound from "../pages/NotFound";
import ProductoDetalle from "../pages/productos/ProductoDetalle";
import ProductosAdd from "../pages/productos/ProductosAdd";
import ProductoEditar from "../pages/productos/ProductoEditar";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <ProductosAdd />
            },
            {
                path:'productos/:id',
                element: <ProductoDetalle />
            },
            {
                path:'productos/:id/editar',
                element: <ProductoEditar />
            }
        ]
    }
]);