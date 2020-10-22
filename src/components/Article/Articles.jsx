import React from 'react';

const Articles = ({articles}) =>{
  
  const articlesElements = articles.map(article => (

    <li key={article.name}>
       <h2>{article.title}</h2>
       <h4>{article.author}</h4>
       <p>{article.description}</p>
       <span><a href={article.url} target="blank">{article.url}</a></span>
    </li>

  ));
  return <ul> {articlesElements} </ul>
  
}
export default Articles;





