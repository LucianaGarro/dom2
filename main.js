//DOM (MODELOS DE OBJETOS DEL DOCUMENTOS)
//ETIQUETAS HTML = NODOS

//PLANTILLAS LITERALES

//ANTES:
let cliente = "Ricky Fort";
let montoCompra = "10000000";

let mensaje = cliente + " realizo una compra por $$  "  +  montoCompra;

console.log(mensaje);

// plantillas literales: backsticks `` (alt+96)

//voy a poder concatenar datos y mostrar valores almacenados en las variables.

let mensajePlantilla = `El cliente ${cliente} realizó una compra
por un valor de ${montoCompra} de dólares`;
console.log(mensajePlantilla);

// ¿Qué es DOM? DOCUMENT OBJECT MODEL = MODELOS DE OBJETOS DEL DOCUMENTO

//El Dom es una estructura de objetos generada por el navegador la cula representa la página HTML actual. Lo que va a a hacer DOM es transformarme el html en objetos. 
//Cada etiqueta HTML se transformar para el DOM en un NODO, que contiene las mismas propiedades de un objeto en js.
//Esto me permite trabajar desde el lado del lenguaje de programación, accediendo a la estructura html. 
//Vamos a poder acceder a esa estructura y modificarla DE MANERA DINÁMICA.


//¿Cómo funciona?
//En el modelo de objetos del documento, cada etiqueta representa un NODO.
//Estos nodos SON ACCESIBLES por medio de js através del objeto global "document"

//1) ACCEDEMOS AL DOM

//POR MEDIO DEL ID, CREAMOS UNA VARIABLE EN JS Y LO VINCULAMOS A LA ETIQUETA H1

const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal)

// POR MEDIO DE LAS CLASES ACCEDO A LA ETIQUETA P.

const nombres = document.getElementsByClassName("nombre");
console.log(nombres);

// POR MEDIO DE LA ETIQUETA

const animales = document.getElementsByTagName("li");
console.log (animales);

//D) QUERYSELECTOR: ES UN MÉTODO QUE NOS PERMITE SELECCIONAR NODOS CON LA MISMA SINTAXIS QUE EN CSS. Solo me trae el primer nodo de esa característica que encuentre. 

const queryNombres = document.querySelector(".nombre");
console.log(queryNombres);

//E) querySelectorAll: me trae todos los nodos

const queryNombresAll = document.querySelectorAll(".nombre");
console.log (queryNombresAll);

//Modificar Nodos

//innerText: me permite acceder al contenido textual de algún elemento del DOM y modificarlo de manera dinámica. 
tituloPrincipal.innerText = "Modificamos el título desde main.js";

//innerHTML: me permite agregar código html en el interior de un nodo. 
// const divContenedor = document.getElementById("divContenedor");

// divContenedor.innerHTML = `<p> Esto es un párrafo </p>`;

divContenedor.innerHTML = ` <div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Aregar al carrito!</button>
                            </div>`

tituloPrincipal.className =  "titulo";

//Agregar Nodos:
const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p")
parrafo.innerText = "Creamos un párrafo";
parrafo.className = "titulo";

contenedor.appendChild(parrafo)

//Eliminar nodos

//remove(): eliminar el método seleccionado

parrafo.remove();

//Creamos objetos de forma dinámica

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const yerba = new Producto ("Yerba", 250);
const harina = new Producto ("Harina", 300);
const azucar = new Producto ("Azucar", 300);

const arrayProductos = [yerba, harina, azucar];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach( producto => {
    const div = document.createElement ("div");
    div.innerHTML =`<p> Nombre del producto: ${producto.nombre}</p>
                    <p> Precio del producto: ${producto.precio}</p>
                    <button>AGREGAR AL CARRITO</button>`;
                    contenedorProductos.appendChild(div);
})

