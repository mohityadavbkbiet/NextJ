import { useEffect, useState } from 'react';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><em>By {post.author} on {new Date(post.createdAt).toLocaleString()}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
