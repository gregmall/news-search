import React from 'react';


const Articles = ({articles}) =>{
  console.log(articles)
  const articlesElements = articles.map(article => (
    <li key={article.title}>
      <span>1 {article.name}</span>
      <span>2 {article.author}</span>
      <span>3 {article.title}</span>
      <span>4 {article.description}</span>
      <span>5 {article.url}</span>
      
    </li>

  ));
  return <ul>
    {articlesElements}
  </ul>
  
  



}
export default Articles;





