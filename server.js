'use strict';

const express = require('express');
const app = express();
app.use(express.json())

app.get('/' , (req,res)=>{
    res.status(200).send('Hello World')
})

app.post('/person',(req,res)=>{
    res.status(200).json({
        persons_name:req.body.name,
        persons_age:req.body.age + 5 ,
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