import * as R from 'ramda';
import ReactDOM from 'react-dom';
import ExampleClass from './components/example/ExampleClass';
import App from './react-components/App';
import { cube } from './utils/math';

const ciao = new ExampleClass(cube(5));

console.log(R.add(4)(10), ciao);
console.log(R.inc(9));
const result = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(result);
const asd = R.pipe(Math.abs, R.add(1), R.multiply(4))(-4);
console.log(asd);

ReactDOM.render(<App />, document.getElementById('app'));
