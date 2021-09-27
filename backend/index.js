const express= require ('express');
const app = express();
const bodyParser= require('body-parser');
const apiRoutes= require('./routes/api');
const cors =require('cors')

app.listen(3200,()=>{
    console.log(`Connected to server PORT: 3200`)
});

require('./conection');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.use('/api',cors('http://localhost:3000/'), apiRoutes);






