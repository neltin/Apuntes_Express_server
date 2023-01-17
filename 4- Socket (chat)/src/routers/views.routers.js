const {Router} = require('express');
const HomeRoute =  require('./home/home.route');  
const RealTimeProductsRoute =  require('./products/RealTimeProductsRoute.route'); 
const Chat =  require('./chat/Chat.route'); 

const router = Router();

//Rutas de home
router.use("/", HomeRoute);
router.use("/realtimeproducts", RealTimeProductsRoute);
router.use("/chat", Chat);

module.exports = router;