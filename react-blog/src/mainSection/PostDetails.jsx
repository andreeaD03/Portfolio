import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PostDetails.css";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        );
      })
      .then((res) => res.json())
      .then((user) => setAuthor(user));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="postDetail postDetailsContainer">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {author && <p className="author">Autor: {author.name}</p>}
      <Link to="/" className="backLink">
        ← Back
      </Link>
    </div>
  );
}

export default PostDetail;
