import Example from '../js/components/example/Example';

Example();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await import(
    /* webpackChunkName: "dynamic-imported" */ '../js/components/example/ExampleDi'
  );
  const a = 12;
  const b = 30;
  document.querySelector('.info2').innerHTML = await di();
  document.querySelector('.info2').append(`DYNAMIC EXAMPLE TS! Answer is ${myAdd(a, b)}!!!`);
}

const myAdd = function (x: number, y: number): number {
  return x + y;
};
