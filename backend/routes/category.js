const { connection } = require('../conection');

const category = require('express').Router();

category.get('/',async (req,res)=>{
    const query = `select * from categoria`
    await connection.query(query,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

category.get('/:id',async (req,res)=>{
    const query = `select * from categoria where id_categoria= ${req.params.id}`
    await connection.query(query,(err,result)=>{
        if (err) throw err;
        res.send(result)
    })
})

module.exports=category;