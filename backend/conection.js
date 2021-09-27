const mysql =require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'PruebaCurso21',
    database: 'presupuesto'
});

connection.connect(error=>{
    if (error) throw error;
    console.log('succes connection')
});

module.exports={connection};