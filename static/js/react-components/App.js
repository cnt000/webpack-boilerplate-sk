import React, { Suspense, lazy } from 'react';
const OtherComponent = lazy(() => import('./OtherComponent'));

const App = () => {
  return (
    <>
      <p>CIAO REACT</p>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </>
  );
};

export default App;
