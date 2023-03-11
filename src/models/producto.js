import  Contenedor  from "../container/containerDb.js";
import  containerFaker  from "../container/containerFaker.js";
import { clienteSql } from '../db/clienteSql.js';


const products = new Contenedor(clienteSql, 'productos')


export class Producto {

    constructor(title, price, thumbnail) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail
    }
 
   guardarProducto(producto){
        const resul =   products.save(producto);
        return resul
    }

    obtenerProductos(){
       return products.getAll();
    }

    obtenerProductosFaker(objeto){
        const productosFaker = new ContenedorFaker(objeto)
        return productosFaker.getAll();
     }
}