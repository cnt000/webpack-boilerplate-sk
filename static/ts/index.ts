import Example from '../js/components/example/index';

Example();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await import(
    /* webpackChunkName: "dynamic-imported" */ '../js/components/example/dynamic-imported'
  );
  const a = 12;
  const b = 30;
  document.querySelector('body').innerHTML = await di();
  document.querySelector('body').append(`DYNAMIC EXAMPLE TS! Answer is ${myAdd(a, b)}!!!`);
}

const myAdd = function (x: number, y: number): number {
  return x + y;
};
