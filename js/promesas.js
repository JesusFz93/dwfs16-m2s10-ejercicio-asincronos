// Para crear promesas
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const usuarios = [
      {
        id: 1,
        nombre: "Pablo",
        email: "p@gmail.com",
      },
      {
        id: 2,
        nombre: "Jose",
        email: "j@gmail.com",
      },
      {
        id: 3,
        nombre: "Fernando",
        email: "f@gmail.com",
      },
    ];

    // const edad = 17;

    // let correcto = false;

    if (usuarios.length > 0) {
      const resp = {
        msg: "Usuarios obtenidos",
        data: usuarios,
      };

      resolve(resp);
    } else {
      const resp = {
        msg: "Lista vacia",
        data: [],
      };

      reject(resp);
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
  })
  .finally(() => {
    console.log("Se ejecuto al final de la promesa");
  });
