const {Router} = require('express');
const router = Router();

//HandleBars Router Real Time Products
router.get('/', (req, res )=>{

    const data =  {
        title: "Chat",
        style: "/styles/chat.css"
    }


    res.render('chat', data);
})

module.exports = router;