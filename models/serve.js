var express = require('express');
var cors=require('cors');



class Server{
    constructor() {
        this.app=express();
        this.port=process.env.PORT;

        //Middlewares -> funciones que van añadir otra funcionalidad
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){
        //Directorio publico
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use('/api/usuarios',require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`localhost:${this.port}`);
            
        })
        
    }



}

module.exports=Server;



/*
routes(){

    this.app.get('/api', (req, res)=> {
        res.json({
            ok:true,
            msg:"get de mi api"
        });
    });
}
*/