const {Router} = require('express');
const router = Router();

const products = [];

const middleware1 = (req, res, next) =>{
    //podemos crear una validacion previa
    next();
}

const middleware2 = (req, res, next) =>{
    next();
}

router.get('/', [middleware1, middleware2] , (req, res => {
    res.json({
        status: "sucess",
        data: products
    })
}))



router.post('/', (req, res => {
    const p = req.body;
    products.push(p);

    res.json({
        status: "sucess",
        data: p
    })
}))



module.exports = router;