const {Router} = require('express');
const HomeRoute =  require('./home/home.route');

const router = Router();

//Rutas de home
router.use("/", HomeRoute);



module.exports = router;