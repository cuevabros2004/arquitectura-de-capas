import Contenedor from "../container/containerDb.js";
import { clienteSql } from '../db/clienteSql.js';
import pino from 'pino'
import colors from 'colors'
import { productoServicio } from "../negocio/services/productoService.js";

const logger = pino({
  prettyPrint: {
    colorize: true, // colorizes the log
    levelFirst: true,
    translateTime: 'yyyy-dd-mm, h:MM:ss TT',
  },
})

const prodTest = new Contenedor(clienteSql, 'productos')

const pinoError = pino("./logs/error.log");

function controladorWeb(req, res) {

    if (req.session?.user)
      res.render('formulario');
    else
      return res.redirect('/')
}

async function controladorWebListadoProductos(req, res) {
 
    const productos = await productoServicio.getProductos()
      
    if(productos.message){
        loggerError(req, error.message)
        throw(error)
    } else
        res.render('listado', { productos, hayProductos: productos ? productos.length : null })

}

async function controladorPostWebProductos(req, res) {
    res.status(201);
    
    const datosProducto = req.body
    const resul = productoServicio.grabarProducto(datosProducto)

    if(resul.message) {
      loggerError(req, error.message)
      throw(error)
    } else
       res.render('formulario');

  } 
    


export {
  controladorWeb,
  controladorPostWebProductos,
  controladorWebListadoProductos
};

