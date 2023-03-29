let typeHousing = document.getElementById('type');
let inputPrice = document.getElementById('price');
let timeOut = document.getElementById('timeout');
let timeIn = document.getElementById('timein');
typeHousing.addEventListener('change', function(){
  switch(this.value){
    case 'bungalow':
      inputPrice.placeholder = 0;
      inputPrice.min = 0;
      break;
    case 'flat':
      inputPrice.placeholder = 1000;
      inputPrice.min = 1000;
      break;
    case 'house':
      inputPrice.placeholder = 5000;
      inputPrice.min = 5000;
      break;
    case 'palace':
      inputPrice.placeholder = 10000;
      inputPrice.min = 10000;
      break;
  }
});


timeIn.addEventListener('change', function(){
  switch(this.value){
    case '12:00':
      timeOut.value = '12:00';
      break;
    case '13:00':
      timeOut.value = '13:00';
      break;
    case '14:00':
      timeOut.value = '14:00';
      break;
  }
});


timeOut.addEventListener('change', function(){
  switch(this.value){
    case '12:00':
      timeIn.value = '12:00';
      break;
    case '13:00':
      timeIn.value = '13:00';
      break;
    case '14:00':
      timeIn.value = '14:00';
      break;
  }

});
