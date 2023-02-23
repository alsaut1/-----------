function getRandomIntInclusive(min, max) {
  if (min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return 'error';
}

function getRandomArbitrary(min, max,decimalPoint =0 ) {
  if (max > min){
    return (Math.random() * (max - min) + min).toFixed(decimalPoint);
  }
  return 'error';
}

console.log (getRandomArbitrary(5.3,10.23,5));
