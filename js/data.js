const author = ['Каштанка', 'Пушок', 'Барсик', 'Рыжик', 'Васька', 'Мишка', 'Чебурек', 'Ромашка', 'Говнокот', 'Заяц', 'Дикобраз'];
const typer = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const title = {
  first: ['Охуеннейший', 'Пиздатый', 'Уютный', 'Милый', 'Классный'],
  sekond: ['дом', 'сарай', 'зиндан', 'сортир', 'аппартамант', 'коврик у входа']
};
const fotki = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const description = {

  first: ['Идеальное', 'Пиздатое','Ароматное', 'Пацанское', 'Чиста душевное', 'Зачетное', 'Уютное'],
  sekond: ['местечко', 'урочище', 'положение', 'местоположение', 'поприще', '	поместье'],
  free: ['для перепихона', 'надолго', 'на часик', 'для ПМЖ', 'на отпуск']
};


function createRandString(datas) {
  let randString = '';
  for  (const property in datas){
    let numberWord = (getRandomIntInclusive(1, (datas[property].length)));
    randString += ' ' + (datas[property][numberWord-1]);
  }
  return (randString);
}

console.log(createRandString(description));

