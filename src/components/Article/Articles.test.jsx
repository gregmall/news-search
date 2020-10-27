import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Articles from './Articles';

describe('Articles component', () => {
    afterEach(() => cleanup());
    it('renders Article', () => {
        const { asFragment } = render(<Articles
          articles={[  
            {
              title: "Test Article",
              author: "Test Author",
              description: "Test Description",
              url: "Test Url"
            }
        ]}
      />);
        expect(asFragment()).toMatchSnapshot()
    });
});
