import Example from './components/example/index';
import logoExample from '../../img/logo_cesarine.png';
import pinImage from '../../img/svg/pin.svg';
import login from '../../img/datauriSvg/login.svg';

Example();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await import(
    /* webpackChunkName: "dynamic-imported" */ './components/example/dynamic-imported'
  );
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
  document.querySelector('body').append('png from file');
  document.querySelector('body').append(logo);

  const pin = new Image();
  pin.src = pinImage;
  pin.alt = '';
  pin.width = 30;
  pin.height = 30;
  document.querySelector('body').append('svg from file');
  document.querySelector('body').append(pin);

  const loginImage = new Image();
  loginImage.src = login;
  loginImage.alt = '';
  loginImage.width = 30;
  loginImage.height = 30;
  document.querySelector('body').append('svg from datauri');
  document.querySelector('body').append(loginImage);
}
