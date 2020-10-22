import React, { Component } from 'react';
import Articles from '../components/Article/Articles';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading'

import searchNews from '../components/services/news-search'



export default class NewsSearch extends Component {
  state = {
    loading: true,
    text: '',
    articles: []


  }
  handleChange= ({ target })=> {
    this.setState({ text: target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    searchNews(this.state.text)
    .then(articles => this.setState({articles, loading: false}));

  }

render() {
  const { text, articles, loading} = this.state;

  
return (

<div>
<Search
  text = {text}
  onChange={this.handleChange}
  onSubmit={this.handleSubmit}
/>
{loading ? <Loading/> : 
   
<Articles 
  articles ={articles}
  />}


</div>


);

}
}
