// // Ejercicio 1
// // Crea una función con el nombre saludar la cual recibe un parámetro de tipo string y otro que será una función callback.
// // Dentro de la función saludar, el parámetro de tipo string debe ser convertido a mayúsculas y se deberá pasar como argumento al callback.
// // En la función callback, recupera el resultado e imprímelo en consola.
// // Ahora bien, manda llamar a tu función saludar.

const saludar = (nombre, callback) => {
  let nombreMayusculas = nombre.toUpperCase();

  setTimeout(() => {
    callback(nombreMayusculas);
  }, 4000);
};

const imprimeNombre = (nombreEnMayusculas) => {
  console.log(nombreEnMayusculas);
};

saludar("fernandez", imprimeNombre);

console.log("final");
// imprimeNombre("fernandez");
