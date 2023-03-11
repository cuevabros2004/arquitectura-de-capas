import  Contenedor  from "../container/container.js";
import { clienteSql } from '../db/clienteSql.js';


const chats = new Contenedor('chat.txt')

export class Chat {

    constructor(email, nombre, apellido, edad, alias, avatar, mensaje) {
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.alias = alias;
        this.avatar = avatar;
        this.mensaje = mensaje;

    }
 
   guardarMensajeChat(chat){
        const resul =   chats.save(chat);
        return resul
    }

 
}