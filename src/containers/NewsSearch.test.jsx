import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { searchNews } from '../services/news-search';

jest.mock('../services/news-search');

describe('NewsSearch container', () => {
  it('displays a list of articles', async () => {
    searchNews.mockResolvedValue([
      {
        title: 'news 1',
        author: 'steve news',
        description: 'stuff here',
        url: 'website1'
      },
      {
        title: 'news 2',
        author: 'jane news',
        description: 'stuff here',
        url: 'website2'
      },
      {
        title: 'news 1',
        author: 'betty news',
        description: 'stuff here',
        url: 'website3'
      }
    ]);
    render(<NewsSearch />);
    const button = screen.getByTestId('submit')
    await fireEvent.click('button')
    const articlesList = await screen.findByTestId('articles');
    expect(articlesList).not.toBeEmptyDOMElement()

  });
});
