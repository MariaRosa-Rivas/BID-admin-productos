const ProductoController = require('../controllers/producto.controller');
module.exports = function(app){
    app.get('/api', ProductoController.index);
    app.post('/api/people', ProductoController.createProducto);
    app.get('/api/people',ProductoController.getAllPeople);
    app.get('/api/people/:id',ProductoController.getProducto);
    app.put('/api/people/:id',ProductoController.updateProducto);
    app.delete('/api/people/:id',ProductoController.deleteProducto);
}
