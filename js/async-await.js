// Para crear promesas
const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const usuarios = [];

    // const edad = 17;

    let correcto = false;

    if (usuarios.length > 0) {
      const resp = {
        msg: "Usuarios obtenidos",
        data: usuarios,
      };

      resolve(resp);
    } else if (correcto) {
      const resp = {
        msg: "No hay usuarios pero no pasa nada",
        data: [],
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

const ejecutarPromesa = async () => {
  try {
    const resp = await promesa1;
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

// const ejecutarPromesa = () => {
//   const resp = promesa1;
//   console.log(resp);

//   console.log("No espera");
// };

ejecutarPromesa();
