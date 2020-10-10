// import all library and package
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import component
import Jumbo from '..';
// delete the component created for testing
afterEach(cleanup);
//---------------tests-----------------//
describe('Jumbo component', () => {
  // renders Jumbo test
  it('render', () => {
    render(<Jumbo />);
  });
  // arrange
  const { asFragment } = render(<Jumbo />);
  // assert
  expect(asFragment()).toMatchSnapshot();
});

describe('emoji visibility', () => {
  it('inserts emoji into the ', () => {
    // arrange
    const { getByLabelText } = render(<Jumbo />);
    // assert
    expect(getByLabelText('wink')).toHaveTextContent('😉');
  });
});
