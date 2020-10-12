import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);
describe('Resume component', () => {
  // render base line test
  it('renders', () => {
    render(<Resume></Resume>);
  });
});
// match snapshot
describe('matches snapshot', () => {
  // arrange
  const { asFragment } = render(<Resume></Resume>);
  // assert
  expect(asFragment()).toMatchSnapshot();
});
// subtitle visibility
describe('subtitle visibility', () => {
  it('inserts text into subtitle', () => {
    //arrange
    const { getByTestId } = render(<Resume></Resume>);
    //assert
    expect(getByTestId('education')).toHaveTextContent('EDUCATION');
    expect(getByTestId('experience')).toHaveTextContent(
      'PROFESSIONAL EXPERIENCE',
    );
    expect(getByTestId('frontEnd')).toHaveTextContent(
      'FRONT-END PROFICIENCIES:',
    );
    expect(getByTestId('backEnd')).toHaveTextContent('BACK-END PROFICIENCIES:');
  });
});
