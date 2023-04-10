let typeHousing = document.getElementById('type');
let inputPrice = document.getElementById('price');
let timeOut = document.getElementById('timeout');
let timeIn = document.getElementById('timein');
let addresForm = document.getElementById('address');
const rememberRooms = document.getElementById('room_number');
const rememberHare = document.getElementById('capacity');


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


addresForm.addEventListener('invalid', () => {
  addresForm.setCustomValidity('Долбоеб Адрес укажи на карте!');
});

const selectHare =  rememberHare.querySelectorAll('option');
selectHare.forEach((hare) => {hare.disabled = true;});

rememberRooms.addEventListener('change', function(){
  selectHare.forEach((hare) => {
    if(this.value >= hare.value){
      hare.disabled = false;
    } else {
      hare.disabled = true;
    }
  });
});
