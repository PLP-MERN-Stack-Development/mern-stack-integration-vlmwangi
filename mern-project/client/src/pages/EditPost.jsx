import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { postService } from "../services/api.js";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    postService.getPost(id).then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const handleUpdate = async updatedData => {
    await postService.updatePost(id, updatedData);
    navigate(`/posts/${id}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Edit Post</h1>
      <PostForm initialData={post} onSubmit={handleUpdate} />
    </div>
  );
}
