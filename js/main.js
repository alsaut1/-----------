function getRandomIntInclusive(min, max) {
  if ( min >0 && max >0) {
    if (max <min) {
      [min, max] = [max, min];
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  return -1;
}

function getRandomArbitrary(min, max,decimalPoint =0 ) {
  if (min >0 && max >0){
    if (max <min) {
      [min, max] = [max, min];
    }
    return (Math.random() * (max - min) + min).toFixed(decimalPoint);
  }
  return -1;
}


