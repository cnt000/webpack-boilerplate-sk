class ExampleClass {
  constructor(value) {
    console.log('Example Class');
    document.querySelector('#content').innerHTML = `Example Class work: ${value}`;
  }
}

export default ExampleClass;
