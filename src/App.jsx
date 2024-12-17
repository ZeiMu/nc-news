import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ArticleList from "../Components/ArticleList";

function App() {
  // state for storing article
  const [articles, setArticles] = useState([]);
  // state for loading
  const [loading, setLoading] = useState(true);
  // state for errors
  const [error, setError] = useState(null);

  // fetch articles from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/articles")
      .then((response) => {
        // console.log(response.data);
        setArticles(response.data.articles); // article list
        setLoading(false) //loading is set to false when getting data
      })
      .catch((err) => {
        setError("Error getting articles");
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Northcoders News</h1>
      {loading && <p>Loading articles</p>}
      {error && <p>{error}</p>}

      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
