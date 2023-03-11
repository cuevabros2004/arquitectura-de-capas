import Contenedor from "../container/containerDb.js";
import ContenedorFaker from "../container/containerFaker.js";
import { clienteSql } from '../db/clienteSql.js';
import pino from 'pino'
import colors from 'colors'
//import { Producto } from "../models/producto.js";
import { productoServicio } from "../negocio/services/productoService.js";
import loggerError from '../utils/pinoError.js';

const products = new Contenedor(clienteSql, 'productos')
const productsFaker = new ContenedorFaker(clienteSql, 'productos')


const logger = pino({
    prettyPrint: {
        colorize: true, // colorizes the log
        levelFirst: true,
        translateTime: 'yyyy-dd-mm, h:MM:ss TT',
    },
})

const pinoError = pino("./logs/error.log");


async function controladorPostProductos(req, res) {
    res.status(201);

    const datosProducto = req.body

    const resul = await productoServicio.agregarProducto(datosProducto)
        
    if(resul.message){
        loggerError(req, resul.message)
        throw(error)
    } else
       res.json(datosProducto)

    }

 

async function controladorGetProductos(req, res) {

    const productos = await productoServicio.getProductos()
    
    if(productos.message){
        loggerError(req, error.message)
        throw(error)
    } else
        res.json(productos);

}

async function controladorGetProductosTest(req, res) {
    const productos = await productoServicio.getProductosFaker()
    
    if(productos.message) {
        loggerError(req, error.message)
        return error
    } else
      res.json(productos); 
}


function controladorproductosRandom(req, res) {
    res.send(products.getById(randomUUID()))
}




export {
    controladorGetProductos,
    controladorPostProductos,
    controladorproductosRandom,
    controladorGetProductosTest
};