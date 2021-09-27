const { connection } = require('../conection');

const operations = require('express').Router();

operations.get('/',(req,res)=>{
    res.send('connect to operation');
})

operations.get('/:userIdUsuario', async (req,res)=>{
    const query = `select id_oper,concepto,monto,tipo,categoriumIdCategoria,DATE_FORMAT(fecha,'%Y/%m/%d') as fecha from presupuesto.operacions where userIdUsuario = ? order by fecha desc limit 10`;
    const idUser = req.params.userIdUsuario;
    await connection.query(query,idUser,(err,result)=>{
        if (err)throw err;
        res.send(result)
    })
})

operations.get('/Ingreso/:userIdUsuario', async (req,res)=>{
    const query = `select sum(monto) as monto from presupuesto.operacions where userIdUsuario=? and tipo='Ingreso'`;
    const idUser = req.params.userIdUsuario;
    await connection.query(query,idUser,(err,result)=>{
        if (err)throw err;
        res.send(result)
    })
})

operations.get('/Egreso/:userIdUsuario', async (req,res)=>{
    const query = `select sum(monto) as monto from presupuesto.operacions where userIdUsuario=? and tipo='Egreso'`;
    const idUser = req.params.userIdUsuario;
    await connection.query(query,idUser,(err,result)=>{
        if (err)throw err;
        res.send(result)
    })
})

operations.get('/:userIdUsuario/:tipo', async (req,res)=>{
    const query = `select id_oper,concepto,monto,DATE_FORMAT(fecha,'%Y/%m/%d') as fecha from presupuesto.operacions where userIdUsuario = '${req.params.userIdUsuario}' and tipo='${req.params.tipo}' order by fecha desc  limit 10`;
    await connection.query(query,(err,result)=>{
        if (err)throw err;
        res.send(result)
    })
})

operations.post('/:userIdUsuario', async (req,res)=>{
    const query = 'insert into operacions set ?'
    const operation ={
        concepto:req.body.concepto,
        monto:req.body.monto,
        fecha:req.body.fecha,
        tipo:req.body.tipo,
        categoriumIdCategoria: req.body.categoriumIdCategoria,
        userIdUsuario: req.params.userIdUsuario
    }
    await connection.query(query,operation,(err)=>{
        if (err) throw err;
        res.send(`created a operations`)
    })
})

operations.put('/:id', async (req,res)=>{
    const query = `update operacions set ? where id_oper= ${req.params.id}`;
    const operation ={
        concepto:req.body.concepto,
        monto:req.body.monto,
        fecha:req.body.fecha,
        tipo:req.body.tipo,
        categoriumIdCategoria: req.body.categoriumIdCategoria,
    }
    await connection.query(query,operation,(err)=>{
        if (err) throw err;
        res.send(`change successfull`)
    })
})

operations.delete('/:id', async(req,res)=>{
    const query=`delete from operacions where id_oper=?`;
    await connection.query(query,req.params.id,(err)=>{
        if (err) throw err;
        res.send(`deleted operation`)
    })
})

module.exports=operations;