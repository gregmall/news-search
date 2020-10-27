import React from 'react';
import Article from './Article';
import styles from './Articles.css';
import PropTypes from 'prop-types';


function Articles({ articles }) {

  const articlesElements = articles.map(article => (

    <li key={article.name} className={styles.Articles}>
      <Article {...article}/>
    </li>

  ));

  return <ul data-testid="articles"> {articlesElements} </ul>;
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};


export default Articles;
