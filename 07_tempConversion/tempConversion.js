const convertToCelsius = function(tempF) {

  //is there a better way to write expressions with multiple variables
  let resultC = (tempF - 32) * (5/9);

  let finalC = Math.round(resultC * 10) / 10;

return finalC;

};

const convertToFahrenheit = function(tempC) {

  let resultF = (tempC * (9/5)) + 32;

  let finalF = Math.round(resultF * 10) / 10;

  return finalF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
