import "./PostList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2>Latest Posts</h2>
      <div className="postList">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="readMoreLink">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
