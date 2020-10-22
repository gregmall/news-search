import React from 'react';


const Articles = ({articles}) =>{
  
  const articlesElements = articles.map(article => (
    <li key={article.title}>
     
      <span>Author: {article.author}</span><br/>
      <span>Title: {article.title}</span><br/>
      <span>Description: {article.description}</span><br/>
      <span><a href={article.url} target="blank">{article.url}</a></span><br/>
      
    </li>

  ));
  return <ul> {articlesElements} </ul>
  
  
}
export default Articles;





