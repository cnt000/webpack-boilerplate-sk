import { Suspense, lazy } from 'react';
const OtherComponent = lazy(() => import('./OtherComponent'));

const App = () => (
  <>
    <p>CIAO REACT</p>
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  </>
);

export default App;
