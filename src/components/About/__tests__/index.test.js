// import all library and package
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import component
import About from '..';
// delete the component created for testing
afterEach(cleanup);
//---------------test-----------------//
describe('About component', () => {
  // renders About test
  it('render', () => {
    render(<About />);
  });
  // arrange
  const { asFragment } = render(<About />);
  // assert
  expect(asFragment()).toMatchSnapshot();
});
