const express=require('express');
const bosyParser=require('body-parser');

const cors=require('cors');
const model=require('../ap/models');

let app=express();
app.use(cors());
//usar requisicoes post
app.use(bosyParser.urlencoded({extend: false}));
//requisicoes json
app.use(bosyParser.json());

//Rotas

app.post('/saveDispositivo', async(req, res)=>{
    let reqs = await model.Dispositivo.create({
        'nome': req.body.nome,
        'email': req.body.email,
        'createdAt': new Date(),
        'updatedAt': new Date()
    });
    console.log(req.body.name);
})

let port=process.env.PORT || 3306;
app.listen(port, (req,res)=>{
    console.log("Servidor rodando");
});