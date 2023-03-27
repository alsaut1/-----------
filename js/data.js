import {getRandomIntInclusive, getRandomArbitrary} from './util.js';

const AUTOR = ['Каштанка', 'Пушок', 'Барсик', 'Рыжик', 'Васька', 'Мишка', 'Чебурек', 'Ромашка', 'Говнокот', 'Дикобраз'];
const typer = ['palace', 'flat', 'house', 'bungalow'];
const checkin = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const title = {
  first: ['Охуеннейший', 'Пиздатый', 'Уютный', 'Милый', 'Классный'],
  sekond: ['дом', 'сарай', 'зиндан', 'сортир', 'аппартамент', 'коврик у входа']
};
const fotki = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const description = {

  first: ['Идеальное', 'Пиздатое','Ароматное', 'Пацанское', 'Чиста душевное', 'Зачетное', 'Уютное'],
  sekond: ['местечко', 'урочище', 'положение', 'местоположение', 'поприще', 'поместье'],
  free: ['для перепихона', 'надолго', 'на часик', 'для ПМЖ', 'на отпуск']
};


const createRandString = (datas) => {
  let randString = '';
  for  (const property in datas){
    let numberWord = (getRandomIntInclusive(1, (datas[property].length)));
    randString += ' ' + (datas[property][numberWord-1]);
  }
  return (randString);
};

const creatUbytovani = () => {
  let getAAutorId = getRandomIntInclusive(1,(AUTOR.length)) - 1 ;
  let FeatureRand = (getArray) => {
    let  arrFeature = [];
    getArray.forEach((item) => {
      if(Math.round(Math.random())) {
        arrFeature.push(item);
      }

    });
    return  arrFeature;
  };

  let location = [getRandomArbitrary(35.65000, 35.70000,5),getRandomArbitrary(139.70000, 139.80000, 5)];
  return {
    author: AUTOR[getAAutorId],
    avatar:'img/avatars/user'+ (getAAutorId+1) +'.png',
    offer:{
      title:createRandString(title),
      price:getRandomIntInclusive(100,1200),
      type:typer[getRandomIntInclusive(1,(typer.length)) - 1],
      rooms:getRandomIntInclusive(1,20),
      guests:getRandomIntInclusive(1,20),
      checkin:checkin[getRandomIntInclusive(1,(checkin.length)) - 1],
      checkout:checkin[getRandomIntInclusive(1,(checkin.length)) - 1],
      features: FeatureRand(features),
      description:createRandString(description),
      photos:FeatureRand(fotki),
      location: location,
      address: location.join (', ')
    }
  };
}

let simularData = new Array(10).fill(null).map(() => creatUbytovani());

creatUbytovani();
export {simularData};
