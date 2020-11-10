import Example from "./components/example/index.js";
import logoExample from '../../img/logo_cesarine.png';
import pinImage from '../../img/svg/pin.svg';

Example();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await import(/* webpackChunkName: "dynamic-imported" */ './components/example/dynamic-imported.js');
  document.querySelector('body').innerHTML = await di();
  document.querySelector('body').append('DYNAMIC EXAMPLE WORKED!');
  insertImages();
}

function insertImages() {
  const logo = new Image();
  logo.src = logoExample;
  logo.alt = '';
  logo.width = 60;
  logo.height = 60;
  const pin = new Image();
  pin.src = pinImage;
  pin.alt = '';
  pin.width = 30;
  pin.height = 30;
  document.querySelector('body').append(logo);
  document.querySelector('body').append(pin);

}
