const {Router} = require('express');
const ProductRoute =  require('./products/products.route');
const CartRoute =  require('./carts/carts.route');

const router = Router();

//HandleBars Router Home
// router.get('/', (req, res )=>{

//     const data =  {
//         title: "Title dinamico Home",
//         name: 'Nelson Martin Gauto'
//     }


//     res.render('index', data);
// })

//Rutas de producto
router.use("/products", ProductRoute);

//Rutas de carrito
router.use("/carts", CartRoute);


router.use((error, req, res, next) =>{
    res.status(404).json({
        status: "error",
        error: error
    })

})

module.exports = router;