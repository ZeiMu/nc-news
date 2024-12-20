import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentCard from "./CommentCard";

function ViewIndividualArticle() {
  const { id } = useParams();
  // console.log(id)
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://my-nc-news-uce3.onrender.com/api/articles/${id}`)
      .then((response) => {
        // 500 error
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error loading article");
        setLoading(false);
      });
    axios
      .get(`https://my-nc-news-uce3.onrender.com/api/articles/${id}/comments`)
      .then((response) => {
        // 500 error
        setComments(response.data.comments);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error loading comments");
        setLoading(false);
      });
  }, [id]);

  // if (!article) return <p>Loading</p>;
  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>{article.body}</p>

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments</p>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </div>
  );
}

export default ViewIndividualArticle;
