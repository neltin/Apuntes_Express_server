const {Router} = require('express');
const ProductRoute =  require('./products/products.route');
const CartRoute =  require('./cart/cart.route');

const router = Router();

//Rutas de producto
router.use("/products", ProductRoute);



//Rutas de carrito
router.use("/cart", CartRoute);

module.exports = router;

