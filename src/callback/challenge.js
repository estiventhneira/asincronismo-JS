/* fetch("https://rickandmortyapi.com/api/location/1")
  .then((resolve) => {
    return resolve.json();
  })
  .then((response) => {
    console.log(response);
    console.log(response.dimension);
  });
 */

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_API, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url_API, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("error " + url_API);
        return callback(error, null);
      }
    } else {
    }
  };
  xhttp.send();
}

fetchData(API, (error1, respuesta1) => {
  if (error1) {
    return console.error(error);
  } else {
    console.log(respuesta1.info.count);
  }
  fetchData(API + respuesta1.results[0].id, (error2, respuesta2) => {
    if (error2) {
      return console.error(error);
    } else {
      console.log(respuesta2.name);
    }
    fetchData(respuesta2.origin.url, (error3, respuesta3) => {
      if (error3) {
        return console.error(error);
      } else {
        console.log(respuesta3.dimension);
      }
    });
  });
});
