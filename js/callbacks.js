// console.log("hola");
// console.log("como estas?");
// console.log("adios");

const saludar = () => {
  console.log("hola");
};

const preguntar = (callback) => {
  setTimeout(() => {
    console.log("como estas?");
    callback();
  }, 3000);
};

const despedir = () => {
  console.log("adios");
};

saludar();
preguntar(despedir);

// despedir();

// Callback hell
// const saludar = () => {
//     console.log("hola");
//   };

//   const preguntar = (callback, cbf2) => {
//     setTimeout(() => {
//       console.log("como estas?");
//       callback(cbf2);
//     }, 3000);
//   };

//   const despedir = (cb) => {
//     console.log("adios");
//     cb();
//   };

//   const funcion2 = () => {
//     console.log("funcion2");
//   };

//   saludar();
//   preguntar(despedir, funcion2);

// const frutas = ["sandia", "pera", "limon"];

// const nvoArreglo = frutas.map((fruta) => {
//   return fruta + "s";
// });

// console.log(nvoArreglo);
