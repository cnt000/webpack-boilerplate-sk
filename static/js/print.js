import * as R from 'ramda';
import React from 'react';
import ReactDOM from 'react-dom';
import ExampleClass from './components/example/ExampleClass.js';
import App from './react-components/App.js';
import { cube } from './math.js';

new ExampleClass(cube(5));

console.log(R.add(4)(10));
console.log(R.inc(9));
const result = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(result);
const asd = R.pipe(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(asd);

ReactDOM.render(<App />, document.getElementById('app'));
