fetch("https://rickandmortyapi.com/api/location/1")
  .then((resolve) => {
    return resolve.json();
  })
  .then((response) => {
    console.log(response);
    console.log(response.dimension);
  });
