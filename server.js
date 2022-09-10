'use strict';

const express = require('express');
const app = express();
const cors = require('cors');


const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json())


app.get('/' , (req,res)=>{
    res.status(200).send('Hello World')
})

app.post('/person',(req,res)=>{
    res.status(200).send({
        persons_name:req.body.name,
        persons_age:Number(req.body.age) + 5 ,
        persons_gender:req.body.gender
    })
})

function start(port) {
app.listen(port , ()=>console.log("server is work"))
}

module.exports ={
    app:app,
    start:start
}