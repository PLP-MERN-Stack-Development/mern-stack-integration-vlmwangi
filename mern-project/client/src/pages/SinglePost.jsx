import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { postService } from "../services/api.js";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id).then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Link to={`/posts/${id}/edit`}>Edit Post</Link>
    </div>
  );
}
