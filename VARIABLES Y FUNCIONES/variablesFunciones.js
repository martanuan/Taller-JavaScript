//array --> colección de elementos

//VARIABLES
//Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por la pantalla del navegador y la consola.

let numero = 33;
let cadenaTexto = "Aprendiendo JavaScript en Factoría F5";
let otracadenaTexto = "y dando mis primeros pasos en JavaScript para convertirme en programadora";
let boleano = true;

console.log(numero);
console.log(cadenaTexto);
console.log(otracadenaTexto);
console.log(boleano);

document.write(numero + "<br>");
document.write(cadenaTexto + "<br>");
document.write(otracadenaTexto + "<br>");
document.write(boleano + "<br>");

//De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división). Deberás imprimir el resultado por la pantalla del navegador y la consola.

let suma = numero + 5;
let resta = numero - 12;
let muntiplacion = numero * 15;
let division = numero / 2;

console.log(suma);
console.log(resta);
console.log(muntiplacion);
console.log(division)

document.write(suma + "<br>");
document.write(resta + "<br>");
document.write(muntiplacion + "<br>");
document.write(division + "<br>");

//De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas cadenas de texto. Deberás imprimir el resultado por la pantalla del navegador y la consola.

let concatena = cadenaTexto + otracadenaTexto;
console.log(concatena);
document.write(concatena + "<br>");


// Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"con un parámetro para el nombre. (es una template string)

let nombre = "Marta"
let saludo = `Hola ${nombre}`; //lo que va entre las {} es codigo JS(una variable, la invocación a una función...)
alert(saludo)
console.log(saludo)
document.write(saludo)

//FUNCIONES

//Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberá imprimir el resultado por la pantalla del navegador y la consola.
function fsuma(num1,num2){
    return num1 + num2;
}
let num1 = 25;
let num2 = 35;
let suma2 = fsuma(num1,num2);

console.log(suma2);
document.write("la suma de " + num1 + " y " + num2 + " es " + suma2)

// Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla del navegador y la consola.

// % --> es el operador módulo, que quiere decir ´´el resto de la división de 2 número"

function paroimpar(numero) {
    if (numero % 2 ===0) //esto quiere decir --> si al dividir el número entre 2 el resto es 0
        return "par";
    else
        return "impar";
}

/* Si el ejemplo nos dijera que fuera múltiplo de 5, usariamos también el módulo
es decir, el %. Si divido entre 5 tiene que dar 0 --> numero % 5 ===0
*/

let numero2 = 3;
console.log(paroimpar(numero2));
document.write(paroimpar(numero2));

let numero3 = 6;
console.log(paroimpar(numero3));
document.write(paroimpar(numero3));
// Para usar prompt: let minumero = prompt("por favor dime un número");


