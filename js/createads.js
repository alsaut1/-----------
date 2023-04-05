import {simularData} from './data.js';


let templAds = document.querySelector('#card').content;
let contAds = templAds.querySelector('.popup');
let listFeatures = {'wifi':'.popup__feature--wifi', 'dishwasher':'.popup__feature--dishwasher', 'parking':'.popup__feature--parking', 'washer':'.popup__feature--washer', 'elevator':'.popup__feature--elevator' , 'conditioner':'.popup__feature--conditioner'};
const keys = Object.keys(listFeatures);
//console.log(simularData);


let renderAds = function (data){
  let ads = contAds.cloneNode(true);
  let fiaturesAdd = data.offer.features;
  let featuresOutput = ads.querySelector('.popup__features');


  ads.querySelector('.popup__title').textContent = data.offer.title;
  ads.querySelector('.popup__text--address').textContent = data.offer.address;
  ads.querySelector('.popup__text--price').textContent = data.offer.price + ' ₽/ночь';
  let type;

  switch (data.offer.type){
    case 'flat':
      type = 'Квартира';
      break;
    case 'bungalow':
      type = 'Бунгало';
      break;
    case 'house':
      type = 'Дом';
      break;
    case 'palace':
      type = 'Дворец';
      break;
  };
  ads.querySelector('.popup__type').textContent = type;
  ads.querySelector('.popup__text--capacity').textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
  ads.querySelector('.popup__text--time').textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
  keys.forEach(key => {

    // eslint-disable-next-line no-empty
    if (fiaturesAdd.includes(key) ){

    } else
    {
      (featuresOutput.querySelector(listFeatures[key])).remove();
    }
  });
  ads.querySelector('.popup__description').textContent = data.offer.description;

  let adsPictures = ads.querySelector('.popup__photos');
  let tegPictures = adsPictures.querySelector('img');
  if (!data.offer.photos.length){
    tegPictures.remove();

  }  else {


    for (let i =0; i<data.offer.photos.length; i++){
      if(!i) {
        tegPictures.src = data.offer.photos[0];
      } else {
        let tegPicturesClone = tegPictures.cloneNode(true);
        tegPicturesClone.src = data.offer.photos[i];
        adsPictures.appendChild(tegPicturesClone);
      }
    }
  }
  let autorPictures = ads.querySelector('.popup__avatar');
  autorPictures.src  = autorPictures.src.replace(data.avatar);


  return ads;
};

export {renderAds};
//  let vzor = renderAds (simularData[0]);
//  let otrisovka = document.querySelector('#map-canvas');
//  otrisovka.appendChild(vzor);
