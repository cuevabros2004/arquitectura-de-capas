import { Producto } from "../models/producto.js"

class ProductoServicio{


    async agregarProducto(producto){
        const productos = new Producto(producto);        
        const registroNuevoProducto = await productos.guardarProducto(producto)
        return registroNuevoProducto
    }

    async getProductos(){
        const productosList = new Producto();

        return productosList.obtenerProductos();
    }

    async getProductosFaker(objeto){
        const productosList = new Producto();

        return productosList.obtenerProductosFaker(objeto);
    }

}


export const productoServicio = new ProductoServicio()