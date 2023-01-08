const {Router} = require('express');
const router = Router();

const carts = [];

router.get('/', (req, res => {
    res.json({
        status: "sucess",
        data: carts
    })
}))

router.post('/', (req, res => {
    const c = req.body;
    carts.push(c);

    res.json({
        status: "sucess",
        data: c
    })
}))



module.exports = router;