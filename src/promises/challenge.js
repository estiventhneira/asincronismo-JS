const fetchData = require("../utils/fetch");
let API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((response) => {
    console.log(response.info.count);
    return fetchData(API);
  })
  .then((response) => {
    console.log(response);
  });
