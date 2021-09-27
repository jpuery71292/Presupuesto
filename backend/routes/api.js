const router = require('express').Router();
const routUser= require('./user');
const routOperation = require('./operation');
const routCategory = require('./category');


router.use('/user',routUser);
router.use('/operation',routOperation);
router.use('/category',routCategory);


router.get('/',(req,res)=>{
    res.send('connect to api')
})

module.exports=router;