function restar(numA, numB) {
  return numA - numB;
}

function hacerCalculo(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(hacerCalculo(16, 16, restar));

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
