const { connection } = require('../conection');
const bcryppt= require('bcryptjs');
const users = require('express').Router();

users.get('/',(req,res)=>{
    res.send(`connect to user`)
})

users.post('/login', async (req,res)=>{
    const query=`select * from users where UsEmail= ?`;
    var result;
    await connection.query(query,req.body.UsEmail,(error,rows)=>{
        if (error) throw error;
        result= rows[0];
        if (result !== undefined){
            const same= bcryppt.compareSync(req.body.UsPass,result.UsPass);
            if (same){
                res.send(result);
            }else{
                res.send(`Incorrect password`);
            }            
        }
        else{
            res.send(`User not exist`);
        }
    });

});


users.post('/create',(req,res)=>{
    const existQuery = 'select * from users where UsEmail= ?'
    connection.query(existQuery,req.body.UsEmail, (err,result)=>{
        if (err) throw err;
        if (result.length === 1){
            res.send(`User exist`);
        }else{
            const query='insert into users set ?';
            const user = {
                UsNombre: req.body.UsNombre,
                UsApellido: req.body.UsApellido,
                UsEmail: req.body.UsEmail,
                UsPass: bcryppt.hashSync(req.body.UsPass,10)
            }
            connection.query(query,user,error=>{
                if (error) throw error;
                res.send(`created user`);
                })
            }
    })
})

module.exports = users;