// OBJETOS
// Todo lo que retorne cada función se debe imprimir el resultado por la pantalla del navegador y la consola.
 //● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
 //● Crear una función que devuelva la marca del carro.
 //● Crear una función que devuelva la cantidad de puertas que tiene el coche.
 //● Crear una función que devuelva un atributo del objeto anidado.

let coche = {
  marca: "Ford",
  modelo: "Modeo",
  anio: 2009,
  color: "Gris",
  detalles: {
      puertas: 5,
      asientos: 5,
      transmision: "Manual",
      motor: "Diesel 2.2"
  },
  obtenerMarca: function() { //Sintaxis de función definida en un objeto
      let mensaje = `La marca del coche es: ${this.marca}`;
      console.log(mensaje);
      document.body.innerHTML += "<p>" + mensaje + "</p>";
      return this.marca;
  },
  obtenerCantidadPuertas: function() {
      let mensaje = `El coche tiene ${this.detalles.puertas} puertas.`;
      console.log(mensaje);
      document.body.innerHTML += "<p>" + mensaje + "</p>";
      return this.detalles.puertas;
  },
  obtenerAtributoAnidado: function() {
      let atributo = this.detalles.transmision; //almacenado en la variable atributo el valor de transmisión
      let mensaje = `El atributo anidado 'transmision' es: ${atributo}`;
      console.log(mensaje);
      document.body.innerHTML += "<p>" + mensaje + "</p>";
      return atributo;
  },

  obtenerAntiguedad: function() {
    let anioDate = new Date().getFullYear(); //Date es un objeto ya establecido en JS
    let mensaje = `La antigüedad del coche es: ${anioDate - this.anio} años`;
    console.log(anioDate);
    document.body.innerHTML += "<p>" + mensaje + "</p>";
  }
};

// Llamadas a las funciones del objeto coche
coche.obtenerMarca();
coche.obtenerCantidadPuertas();
coche.obtenerAtributoAnidado();
coche.obtenerAntiguedad();