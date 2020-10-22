const searchNews = (text) =>{

  return fetch(`http://newsapi.org/v2/everything?q=${text}&from=2020-10-20&to=2020-10-20&sortBy=popularity&apiKey=42f5fc6161f94205b657a26969ff02f6`)
  .then(res => res.json())
  .then(json => json.articles)
}
export default searchNews;