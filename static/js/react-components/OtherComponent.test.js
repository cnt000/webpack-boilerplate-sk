import renderer from 'react-test-renderer';

import OtherComponent from './OtherComponent';

it('renders correctly', () => {
  const tree = renderer.create(<OtherComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
