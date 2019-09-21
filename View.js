export default class View{
    constructor(table, registro){
        this._table = table;
        this._registro = registro;

    }

    agregarArticulo(articulo){
        let r = this._registro.agregarArticulo(articulo);

        if(r === true){
            this._show();
        }
    }

    _añadirBotonBorrar(row, articulo){
        let btnDelete = document.createElement('input');
        btnDelete.type= 'button';
        btnDelete.value='Borrar';
        btnDelete.className='btn btn-danger';
        btnDelete.addEventListener('click', () => {
            this._registro._borrarArticulo(row, articulo);
        });
        row.cells[5].innerHTML="";
        row.cells[5].appendChild(btnDelete);
    }

    _show(){
       
       
        this._table.innerHTML='';
        this._registro.articulos.forEach((articulo, index) => {
        let row = this._table.insertRow(-1);

        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);

        cellCodigo.innerHTML = articulo.codigo
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;
        cellDescripcion.innerHTML = articulo.descripcion;
        this._añadirBotonBorrar(row, articulo);
    });
   }

   _MostrarReporte(reporte){
       reporte.innerHTML = "<h3>Reporte</h3>";
        this._registro.articulos.forEach((articulo) =>{
            reporte.innerHTML += articulo.toString();
        })
   }

   _buscar(buscador) {
        this._table.innerHTML='';
        let row = this._table.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);
        let cellDescripcion = row.insertCell(4);
        row.insertCell(5);
        let indice = this._registro._encontrarArticulo(buscador, buscador);
        if(indice >= 0){
            cellCodigo.innerHTML = this._registro.articulos[indice].codigo
            cellNombre.innerHTML = this._registro.articulos[indice].nombre;
            cellPrecio.innerHTML = this._registro.articulos[indice].precio;
            cellCantidad.innerHTML = this._registro.articulos[indice].cantidad;
            cellDescripcion.innerHTML = this._registro.articulos[indice].descripcion;
            this._añadirBotonBorrar(row, this._registro.articulos[indice]);
        }
        else{
            this._show();
        }
    }

}