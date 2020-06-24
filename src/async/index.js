function holaMundo() {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        return resolve("hola Mundo:)");
      }, 3000);
    } else {
      reject("Hola Mundo:(");
    }
  });
}

async function imprimirhola() {
  console.log("after");
  const datos = await holaMundo();
  console.log(datos);
  console.log("before");
}
imprimirhola();
