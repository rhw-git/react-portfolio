// import all library and package
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import component
import Nav from '..';
// delete the component created for testing
afterEach(cleanup);
//---------------tests-----------------//
describe('Nav component', () => {
  // renderts Nav test
  it('render', () => {
    render(<Nav />);
  });
  // arrange
  const { asFragment } = render(<Nav />);
  // assert
  expect(asFragment()).toMatchSnapshot();
});

describe('link visibility', () => {
  it('inserts text into links', () => {
    // arrange
    const { getByTestId } = render(<Nav />);
    // assert
    expect(getByTestId('about')).toHaveTextContent('About Me');
    expect(getByTestId('portfolio')).toHaveTextContent('Portfolio');
    expect(getByTestId('contact')).toHaveTextContent('Contact');
    expect(getByTestId('resume')).toHaveTextContent('Resume');
  });
});
