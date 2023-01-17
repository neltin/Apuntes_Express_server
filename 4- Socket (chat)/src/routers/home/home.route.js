const {Router} = require('express');
const router = Router();

//HandleBars Router Home
router.get('/', (req, res )=>{

    const data =  {
        style:"/styles/home.style.css",
        title: "Home",
        name: 'Nelson Martin Gauto'
    }


    res.render('index', data);
})

module.exports = router;