import React from 'react';
import PropTypes from 'prop-types';

const Search = ({

  text,
  onChange,
  onSubmit

  }) => (

  <form onSubmit={onSubmit}>
    <label htmlFor="text"><h2>Search News By Keyword</h2></label>
    <input
      id="text"
      type="text"
      name="text"
      value={text}
      onChange={onChange}
   
    /><br/ >
      <button type="submit">SEARCH NEWS</button>

  </form>

);
Search.propTypes = {

  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
  
};
export default Search;