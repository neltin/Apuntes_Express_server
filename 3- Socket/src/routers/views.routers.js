const {Router} = require('express');
const HomeRoute =  require('./home/home.route');  
const RealTimeProductsRoute =  require('./products/RealTimeProductsRoute.route'); 

const router = Router();

//Rutas de home
router.use("/", HomeRoute);
router.use("/realtimeproducts", RealTimeProductsRoute);



module.exports = router;