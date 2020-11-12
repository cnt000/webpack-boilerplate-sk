import Example from './components/example/Example';
import ExampleClass from './components/example/ExampleClass';
import logoExample from '../../img/logo_cesarine.png';
import pinImage from '../../img/svg/pin.svg';
import login from '../../img/datauriSvg/login.svg';

Example();
const ciao = new ExampleClass(logoExample);


let person = {
  profile: {
    name: "asd",
    age: 0,
  }
};

console.log('%cNullish Coalescing Operator:', "color: red");
console.log(person.profile.name ?? "Anonymous"); // ""
console.log(person.profile.age ?? 18); // 0
console.log(person.profile.address ?? "not set");

let god = {};

console.log('%cOptional Chaining Operator:', "color: red");
console.log(god?.profile?.name ?? "Anonymous");
console.log(god?.profile?.age ?? 18);

console.log('%cBigInt:', "color: red");
const bigNum = 100000000000000000000000000000n;
console.log(bigNum * 2n); // 200000000000000000000000000000n

console.log('%cDynamic Import:', "color: red");
const doMath = async (num1, num2) => {
  if (num1 && num2) {
    const math = await import('./utils/math.js');
    console.log(math.square(2));
  };
};
doMath(4, 2);

setTimeout(() => getComponent(ciao), 2000);

async function getComponent() {
  const { default: di } = await import(
    /* webpackChunkName: "dynamic-imported" */ './components/example/ExampleDi'
  );
  document.querySelector('.info2').innerHTML = await di();
  document.querySelector('.info2').append('DYNAMIC EXAMPLE WORKED!');
  insertImages();
}

function insertImages() {
  const logo = new Image();
  logo.src = logoExample;
  logo.alt = '';
  logo.width = 60;
  logo.height = 60;
  document.querySelector('.info2').append('png from file');
  document.querySelector('.info2').append(logo);

  const pin = new Image();
  pin.src = pinImage;
  pin.alt = '';
  pin.width = 30;
  pin.height = 30;
  document.querySelector('.info2').append('svg from file');
  document.querySelector('.info2').append(pin);

  const loginImage = new Image();
  loginImage.src = login;
  loginImage.alt = '';
  loginImage.width = 30;
  loginImage.height = 30;
  document.querySelector('.info2').append('svg from datauri');
  document.querySelector('.info2').append(loginImage);
}
