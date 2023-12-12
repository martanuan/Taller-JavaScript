// Crear un array de 10 números específicos
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


//Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
// Para recorrer un array utilizamos for, ya que tiene un incio y un fin definidos.
function imprimirNumeros(array) {
    for (let i = 0; i < array.length; i++) { //se suele utilizar i, pero podría ser x,z,albóndigas
      console.log(array[i]); //para acceder a un elemento de un array, utilizamos []
    }
  }
imprimirNumeros(numeros);
//imprimirNumeros(numeros2); 
//imprimirNumeros([2,4,6,8,10]);

//Crear una función que añada un número al array
function agregarNumeroAlArray(array, numero) {
    array.push(numero);
  }

agregarNumeroAlArray(numeros,11);
console.log(numeros);

//Crear una función que elimine los números pares de ese array(expresión Lambda).
function eliminarNumerosPares(array) {
    let numerosImpares = array.filter(numero => numero % 2 !== 0); //filter es una función que tiene el objeto array y sirve para filtrar elementos del array.
    return numerosImpares;
  }

  numeros = eliminarNumerosPares(numeros);
  console.log(numeros)

//Crear una función que devuelva el número mayor de un array.
  function encontrarNumeroMayor(array) {
    if (array.length === 0) {
      return undefined; // Devolver indefinido si el array está vacío
    }
  
    let mayor = array[0]; //0 es la primera posición, el primer elemento
    for (let i = 1; i < array.length; i++) {
      if (array[i] >mayor)
        mayor = array[i];
    }
    return mayor;
  }
  
  let mayorNumero = encontrarNumeroMayor(numeros);
  console.log("El número mayor es:", mayorNumero);

  //Crear una función que devuelva el número menor de un array.
  function encontrarNumeroMenor(array) {
    if (array.length === 0) {
      return undefined; // Devolver indefinido si el array está vacío
    }
  
    let menor = array[0]; //0 es la primera posición, el primer elemento
    for (let i = 1; i < array.length; i++) {
      if (array[i] <menor)
        menor = array[i];
    }
    return menor;
  }
  let menorNumero = encontrarNumeroMenor(numeros);
  console.log("El número menor es:", menorNumero);

  // Crear un función que convierta en minúsculas todas las letras de un texto.
  function convertirAMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  let textoOriginal = "QUIERO APRENDER A SER PROGRAMADORA CON FACTORÍA F5";
  let textoEnMinusculas = convertirAMinusculas(textoOriginal);
  
  console.log("Texto en minúsculas:", textoEnMinusculas);
  
 // Crear una función que convierta en mayúsculas todas las letras de un texto.
 function convertirAMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  let textoOriginal2 = "Esto Es Un Ejemplo De texto en minúsculas";
  let textoEnMayusculas = convertirAMayusculas(textoOriginal2);
  
  console.log("Texto en mayúsculas:", textoEnMayusculas);

 // Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
 function convertirPrimeraLetraMayuscula(nombres) {
    let nombresMayusculas = nombres.map(nombre => {
      return nombre.charAt(0).toUpperCase() + nombre.slice(1);
    });
  
    return nombresMayusculas;
  }
  
  let nombres = ["elena", "dioni", "marta", "amaya"];
  
  let nombresMayusculas = convertirPrimeraLetraMayuscula(nombres);
  
  console.log("Nombres con la primera letra en mayúscula:", nombresMayusculas);
  