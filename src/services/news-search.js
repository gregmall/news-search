export default function searchNews(text) {
  const now = new Date();
  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
  return fetch(`http://newsapi.org/v2/everything?q=${text}&from=${today}&to=${today}&sortBy=popularity&apiKey=42f5fc6161f94205b657a26969ff02f6`)
    .then(res => res.json())
    .then(json => json.articles);
}
