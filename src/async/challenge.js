const fetchData = require("../utils/fetch.js");
let API = "https://rickandmortyapi.com/api/character/";

const renderData = async () => {
  try {
    const datos = await fetchData(API);
    const nombrepersonaje = await fetchData(`${API}${datos.results[0].id}`);
    const dimension = await fetchData(nombrepersonaje.origin.url);
    console.log(datos.info.count);
    console.log(nombrepersonaje.name);
    console.log(dimension.dimension);
  } catch (error) {
    console.log(error);
  }
};
console.log("before");
renderData();
console.log("after");
