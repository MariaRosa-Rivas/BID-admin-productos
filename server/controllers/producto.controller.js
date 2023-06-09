const { Producto } = require("../models/producto.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createProducto = async (request, response) => {
    try {
        const { titulo, descripcion, precio } = request.body;
        producto = await Producto.create({
            titulo,
            descripcion,
            precio
        });
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllPeople = async (request, response) => {
    try {
        const productos = await Producto.find({})
        response.json(productos);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getProducto = async (request, response) => {
    try {
        const producto = await Producto.findOne({_id:request.params.id})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateProducto = async (request, response) => {
    try {
        const producto = await Producto.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteProducto = async (request, response) => {
    try {
        const producto = await Producto.deleteOne({ _id: request.params.id })
        response.json(producto);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}