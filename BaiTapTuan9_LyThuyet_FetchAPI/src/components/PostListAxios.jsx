// PostListAxios.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "../PostList.css";

const PostListAxios = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: { _limit: 10 } 
      });
      setPosts(response.data.slice(0, 10)); 
    } catch (error) {
      setError(error.message);
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-container">
      <div className="header">
        <h2>Danh sách bài viết (Axios)</h2>
        <button
          onClick={fetchPosts}
          disabled={loading}
          className="reload-btn"
        >
          {loading ? "Đang tải..." : "Tải lại"}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <div className="loading">Đang tải bài viết...</div>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id} className="post-item">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostListAxios;