import usePosts from "../hooks/usePosts";
import PostCard from "../components/PostCard.jsx";

export default function PostList() {
  const { posts, loading } = usePosts();

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        Array.isArray(posts) ? posts.map(post => <PostCard key={post._id} post={post} />) : null // Replaced line: posts.map(post => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
}
