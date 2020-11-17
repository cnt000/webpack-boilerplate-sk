import { Suspense, lazy } from 'react';
import styled from 'styled-components';
const OtherComponent = lazy(() => import('./OtherComponent'));

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 1rem;
  width: 12rem;
  background: lightseagreen;
  color: black;
  border: 2px solid lightcoral;
  text-decoration: none;
  text-align: center;
`;

const App = () => (
  <>
    <Button href="https://www.ilrestodelcarlino.it">CIAO REACT</Button>
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  </>
);

export default App;
