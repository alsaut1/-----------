import {simularData} from './data.js';
import {renderAds} from'./createads.js';
import {createFetch} from './serverconn.js';
import {showAlert} from './errpopup.js';

let readyMap = false;
let loadMap;
const  forms = document.querySelector('.ad-form');
const  inalktiveElements = forms.querySelectorAll('fieldset');
forms.classList.add('ad-form--disabled');
inalktiveElements.forEach((pole) => {
  pole.setAttribute('disabled', 'disabled');
} );
const  formsFilters = document.querySelector('.map__filters');
const  inalktiveElementsFiltra = formsFilters.querySelectorAll('.map__filter, fieldset');
inalktiveElementsFiltra.forEach((pole) =>{
  pole.setAttribute('disabled', 'disabled');
});
formsFilters.classList.add('ad-form--disabled');
let addressForm = forms.querySelector('#address');

const map = L.map('map-canvas')
  .on('load',() =>{
    readyMap = true;

  })
  .setView({
    lat: 35.92138,
    lng: 139.9335,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map).on('add',() =>{
  // Незабыть дописать!
  loadMap = true;
});
const mainPinIcon = L.icon({
  iconUrl: '/leaflet/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const ubytPinIcon = L.icon({
  iconUrl: '/leaflet/img/pin.svg',
  iconSize: [26, 41],
  iconAnchor: [13, 41],
});

if( readyMap ){


  forms.classList.remove('ad-form--disabled');
  formsFilters.classList.remove('ad-form--disabled');
  inalktiveElements.forEach((pole) => {
    pole.removeAttribute('disabled');
  } );

  inalktiveElementsFiltra.forEach((pole) =>{
    pole.removeAttribute('disabled');
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.6732,
      lng: 139.76317,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    let koordinnats = (evt.target.getLatLng());
    let koordinatStr = koordinnats.lat.toFixed(5) +' ' + koordinnats.lng.toFixed(5)
    addressForm.setAttribute('value', koordinatStr);
    addressForm.setAttribute('readonly', true);

  });





  function stavimBody(data){

    data.forEach((chata) => {

      let  lat = chata.location.lat;
      let  lng = chata.location.lng;


      const marker = L.marker({
        lat,
        lng,
      },
      {
        icon: ubytPinIcon,

      },

      );

      marker.addTo(map)
        .bindPopup(
         renderAds(chata),
          {
            keepInView: true,
          },
        );

    });
  }


  const requestRealdata = createFetch(
    (data) => {
      stavimBody(data);
    },
    (err) => {
      showAlert('Пизда пришла серваку твоему!');
      console.log(err);
    });

  requestRealdata();
}
