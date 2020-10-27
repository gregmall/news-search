import React from 'react';
import PropTypes from 'prop-types';

const Article =({ title, author, description, url }) => (
  <>
     <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{description}</p>
      <span><a href={url} target="blank">{url}</a></span>
  </>

);
Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Article;
