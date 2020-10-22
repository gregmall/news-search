import React, { Component } from 'react';
import Articles from '../components/Article/Articles';
import Search from '../components/Search/Search';
import Loading from '../components/Loading/Loading'

import searchNews from '../components/services/news-search'



export default class NewsSearch extends Component {
  state = {
    loading: false,
    text: '',
    articles: []


  }
  handleChange= ({ target })=> {
    this.setState({ text: target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading: true})
    searchNews(this.state.text)
    .then(articles => this.setState({articles}))
    .then(setTimeout(() => {
      this.setState({ loading: false});
    }, 2000));

  }

render() {
  const { text, articles, loading} = this.state;
  if(loading) return <Loading/>

  return (

<div>
  
<Search
  text = {text}
  onChange={this.handleChange}
  onSubmit={this.handleSubmit}
/>

   
<Articles 
  articles ={articles}
  />


</div>


);

}
}
