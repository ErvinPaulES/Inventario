export default class Articulo{
    constructor(articulo){
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
    }
    get nombre(){
        return this._nombre;
    }
    get codigo(){
        return this._codigo;
    }
    get precio(){
        return this._precio;
    }
    get cantidad(){
        return this._cantidad;
    }
    get descripcion(){
        return this._descripcion;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set codigo(codigo){
        this._codigo = codigo;
    }
    set precio(precio){
        this._precio = precio;
    }
    set cantidad(cantidad){
        this._cantidad = cantidad;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    toString(){
        let cadena = this._nombre + " tiene el codigo: " + this._codigo  + " vale: " + this._precio + " " +"hay en existencia " + this._cantidad + " " +  this._descripcion;
        
        return cadena;
    }
}