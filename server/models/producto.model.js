const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    titulo: { 
        type: String,
        minlength:[5, 'El minimo es de 5'] 
    },
    descripcion: { type: String },
    precio: {type: Number}
}, { timestamps: true });
module.exports.Producto = mongoose.model('Producto', ProductoSchema);

