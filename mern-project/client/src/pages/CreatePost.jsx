import { postService } from "../services/api.js";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleCreate = async form => {
    await postService.createPost(form);
    navigate("/posts");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create Post</h1>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
}
