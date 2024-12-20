import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import ArticleList from "../Components/ArticleList";
import ViewIndividualArticle from "../Components/ViewIndividualArticle";


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
      .get("https://my-nc-news-uce3.onrender.com/api/articles")
      // .get("http://localhost:3000/api/articles")
      
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

      <Routes>
        <Route
        path="/"
        element={<ArticleList articles={articles} />} /> 
      <Route
      path="/article/:id"
      element={<ViewIndividualArticle />}
      />
      <Route path="/article/:id" element={<ViewIndividualArticle />} />
     </Routes>
      </div>

    //   <ArticleList articles={articles} />
    // </div>
  );
}

export default App;


