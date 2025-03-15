// PostListFetch.jsx
import { useState, useEffect } from "react";
import "../PostList.css";

const PostListFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Không thể tải dữ liệu");
      const data = await response.json();
      setPosts(data.slice(0, 10)); 
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
        <h2>Danh sách bài viết (Fetch)</h2>
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

export default PostListFetch;