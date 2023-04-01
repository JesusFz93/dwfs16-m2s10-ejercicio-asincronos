// Para crear promesas
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let correcto = false;

    if (correcto) {
      resolve("Promesa cumplida");
    } else {
      reject("Promesa rechazada");
    }
  }, 3000);
});

// Para consumir promesas
promesa1
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
