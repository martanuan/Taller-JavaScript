//1. Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

// Creo el botón
const boton = document.createElement("button");
boton.setAttribute("id", "botonDom"); //le asigno atributo ID al botón

//Le asigno texto al botón
boton.textContent = "Mi primer precioso botón DOM"

//Añado evento para el click
boton.addEventListener("click", function() {
    alert("Estudiando progrmación en Factoría F5");
    
});
 //Añado el botón al DOM (al body)
document.body.appendChild(boton);

// 2. Cambiar el contenido de un elemento HTML mediante JavaScript.
document.getElementsByTagName("h1")[0].innerHTML = "Modifico contenido por el DOM"
//como dice Elements en plural, necesito acceder al h1 que quiero modificar, para ello en caso de que hubieras varios, accedo a él mediante un array espeicificando su posición.

// 3. Ocultar y mostrar elementos HTML utilizando JavaScript.
document.getElementsByTagName("h1")[1].style.display = "none"

// 4. Crear un array de 10 nombres.
let nombres = ["Juanra" , "Marta" , "Dioni" , "Elena" , "Amaya" , "Lucia" , "Emi", "Nati", "Leonor" , "Fernando"];

//5. Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
function imprimeNombres(array) {
    const lista = document.createElement("ul")
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = nombres[i];
        lista.appendChild(li);
    }
    document.body.appendChild(lista);
}
imprimeNombres(nombres);

// 6. Crear un array de números.
let numeros = [1, 2, 3, 4 ,5];

// 7. Crear una función que pinte en pantalla cuántos números tiene el array de números.
function mostrarCantidadNumeros (array){
    const cantidadNumeros = array.length;
    let resultado= document.createElement ('p');
    resultado.textContent = `El array tiene ${cantidadNumeros} números`;
    document.body.appendChild(resultado);
}

mostrarCantidadNumeros(numeros)

// 8. Crea los nodos necesarios para imprimir un formulario.

// creamos el formulario
let formulario = document.createElement("form");

// crear el campo de texto
let campoTexto= document.createElement("input");
campoTexto.type = "text";
campoTexto.name = "name";
campoTexto.placeholder = "Ingresa tu nombre aquí";

//creamos el botón de enviar
let botonEnviar = document.createElement("button");
botonEnviar.type = "button";
botonEnviar.textContent = "Enviar";
botonEnviar.addEventListener("click", function(){
    alert("El formulario ha sido enviado");
});

//se agrega el campo de texto y el botón al formulario
formulario.appendChild(campoTexto);
formulario.appendChild(botonEnviar);

// se agrega el formulario al body del html
document.body.appendChild(formulario);

// 9. Crea los nodos necesarios para imprimir una tabla.

// se crea tabla
let tabla = document.createElement('table');
tabla.setAttribute("border", "2");

// Crear el encabezado de la tabla
let encabezado = document.createElement('thead');
let filaEncabezado = document.createElement('tr');

// Crear celdas del encabezado
let celdaEncabezado1 = document.createElement('th');
celdaEncabezado1.textContent = 'Nombre';

let celdaEncabezado2 = document.createElement('th');
celdaEncabezado2.textContent = 'Edad';

// Agregar celdas al encabezado
filaEncabezado.appendChild(celdaEncabezado1);
filaEncabezado.appendChild(celdaEncabezado2);
encabezado.appendChild(filaEncabezado);

// Crear el cuerpo de la tabla
let cuerpoTabla = document.createElement('tbody');

// Crear filas y celdas de datos
let fila1 = document.createElement('tr');
let celdaNombre1 = document.createElement('td');
celdaNombre1.textContent = 'Amaya';
let celdaEdad1 = document.createElement('td');
celdaEdad1.textContent = '43';

let fila2 = document.createElement('tr');
let celdaNombre2 = document.createElement('td');
celdaNombre2.textContent = 'Marta';
let celdaEdad2 = document.createElement('td');
celdaEdad2.textContent = '33';

// Agregar celdas a las filas
fila1.appendChild(celdaNombre1);
fila1.appendChild(celdaEdad1);

fila2.appendChild(celdaNombre2);
fila2.appendChild(celdaEdad2);

// Agregar filas al cuerpo de la tabla
cuerpoTabla.appendChild(fila1);
cuerpoTabla.appendChild(fila2);

// Agregar encabezado y cuerpo a la tabla
tabla.appendChild(encabezado);
tabla.appendChild(cuerpoTabla);

// Agregar la tabla al body del documento
document.body.appendChild(tabla);