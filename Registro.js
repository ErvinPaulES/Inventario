export default class Agenda{
    constructor(){
        this._articulos=[];
    }
    get articulos(){
        return this._articulos;
      }
  
      _encontrarArticulo(nombre, codigo){
          let result = -1;
          this._articulos.forEach((articulo, index) => {
            if(articulo.nombre===nombre||articulo.codigo === codigo){
              result = index;
              return;
            }
          });
      
          return result;
        }
  
        agregarArticulo(articulo) {
              if(this._encontrarArticulo(articulo.nombre, articulo.codigo) >= 0){
                window.Swal.fire({
                  type:'error',
                  title:'Error',
                  text:'Este articulo ya existe o ese codigo ya ha sido asignado'
                })
                return false;
              }
             
              this._articulos.push(articulo);
              window.Swal.fire({
                type:'success',
                title:'Correcto',
                text:'El articulo fue agregado con exito'
              })  
              return true;        
      }
  
      _borrarArticulo(row, articulo){
          window.Swal.fire({
            type: 'question',
            title: 'Eliminar articulo',
            text: articulo.nombre,
            showCancelButton: true,
            confirmButtonText:'Sí',
            cancelButtonText: 'No'
          }).then( (result) => {
            if(result.value){
                let pos = this._encontrarArticulo(articulo.nombre, articulo.codigo);
                this._articulos.splice(pos, 1);
                row.remove();
            }
          });
        }
}