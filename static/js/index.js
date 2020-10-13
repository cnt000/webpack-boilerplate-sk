import Example from "./components/example";

Example();

setTimeout(() => getComponent(), 2000);

async function getComponent() {
  const { default: di } = await import(/* webpackChunkName: "dynamic-imported" */ './components/example/dynamic-imported');
  document.querySelector('body').innerHTML = await di();
  document.querySelector('body').append('DYNAMIC EXAMPLE WORKED!')
}
