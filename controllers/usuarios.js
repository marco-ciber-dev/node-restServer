const {response,request} = require('express')

const usuariosGet=(req =request, res =response)=> {

    const {q,apikey}=req.query;

    res.json({
        msg:"get de mi api - controlador"
    });
}

const usuariosPost=(req, res=response)=> {

    const {nombre, edad}= req.body;

    res.json({
        msg:"post de mi api - controlador",
        nombre,
        edad
    });
}

const usuariosPut=(req, res=response)=> {

    const {id}= req.params


    res.json({
        msg:"put de mi api - controlador",
        id
    });
}

const usuariosDelete=(req, res=response)=> {
    res.json({
        msg:"delete de mi api - controlador"
    });
}


module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPost
}