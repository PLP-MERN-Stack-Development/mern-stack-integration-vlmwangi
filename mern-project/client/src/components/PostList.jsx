import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import { fetchPosts, deletePost } from "../services/api";
import { useState, useEffect } from "react";

export default function PostList() {
  const { data: posts, loading, error, execute } = useApi(fetchPosts);
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    if (posts) setLocalPosts(posts);
  }, [posts]);

  const handleDelete = async (id) => {
    const oldPosts = localPosts;

    // optimistic update
    setLocalPosts(localPosts.filter(p => p._id !== id));

    try {
      await deletePost(id);
    } catch (err) {
      alert("Failed to delete. Rolling back.");
      setLocalPosts(oldPosts);
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <Link to="/create" className="bg-blue-600 text-white px-3 py-1 rounded">
          New Post
        </Link>
      </div>

      {localPosts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        localPosts.map((post) => (
          <div key={post._id} className="border p-4 rounded">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content.slice(0, 120)}...</p>

            <div className="mt-2 flex gap-3">
              <Link to={`/posts/${post._id}`} className="text-blue-600">
                View
              </Link>
              <Link to={`/edit/${post._id}`} className="text-green-600">
                Edit
              </Link>
              <button 
                onClick={() => handleDelete(post._id)} 
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
