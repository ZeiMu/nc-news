import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewIndividualArticle() {
  const { id } = useParams();
  console.log(id)
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`https://my-nc-news-uce3.onrender.com/api/articles/${id}`)
      .then((response) => {
        // 500 error
        setArticle(response.data.article);
      })
      .catch((error) => {
        console.error("Error loading article", error);
      });
  }, [id]);

  if (!article) return <p>Loading</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
    </div>
  );
}

export default ViewIndividualArticle;
