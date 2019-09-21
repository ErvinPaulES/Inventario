import Articulo from './Articulo.js';
import Registro from './Registro.js';
import View from './View.js';

class Main{
    constructor(){
        let view = new View(document.querySelector('#body'),  new Registro());
        document.querySelector('#agregar').addEventListener('click', () => {
            if(form.checkValidity() === true){
                let nombre = document.querySelector('#nombre').value;
                let codigo = document.querySelector('#codigo').value;
                let precio = Number(document.querySelector('#precio').value);
                let cantidad = Number(document.querySelector('#cantidad').value);
                let descripcion = document.querySelector('#descripcion').value;

                let objarticulo = {
                    codigo: codigo,
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad,
                    descripcion: descripcion
                    
                  };
                let articulo = new Articulo(objarticulo);
                view.agregarArticulo(articulo);
            }
            form.classList.add('was-validated');
        })
        document.querySelector('#Mostrar').addEventListener('click', () => {
            var reporte = document.querySelector('#Reporte');
            view._MostrarReporte(reporte);
            
        })
        document.querySelector('#buscar').addEventListener('click', () => {
            console.log("Si entra");
            
            var buscador = document.getElementById('buscador').value;
            view._buscar(buscador);
        })
    }
    
}
let main = new Main();