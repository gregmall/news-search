
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Controls from './Search';

describe('Controls component', () => {
  afterEach(() => cleanup());

  it('renders Controls', () => {
    const { asFragment } = render(<Controls
      text="Test Display"
      handleChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});