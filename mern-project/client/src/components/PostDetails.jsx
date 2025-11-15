import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { fetchPost } from "../services/api";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, loading, error } = useApi(() => fetchPost(id), true);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="mt-2">{post.content}</p>
    </div>
  );
}
