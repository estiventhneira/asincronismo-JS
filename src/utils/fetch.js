let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fetchData = (url_API) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_API, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          return resolve(JSON.parse(xhttp.responseText));
        } else {
          return reject(new Error("error" + url_API));
        }
      } else {
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
