import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postService } from "../services/api.js";

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({ title: "", content: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Load existing post for editing
  useEffect(() => {
    if (isEditing) {
      loadExistingPost();
    }
  }, []);

  const loadExistingPost = async () => {
    try {
      const res = await postService.getSinglePost(id);
      setForm({
        title: res.data.title,
        content: res.data.content,
      });
    } catch (err) {
      console.error("Error loading post:", err);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.content.trim()) newErrors.content = "Content cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      if (isEditing) {
        await postService.updatePost(id, form);
      } else {
        await postService.createPost(form);
      }

      navigate("/");
    } catch (err) {
      console.error("Post save error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">
        {isEditing ? "Edit Post" : "Create Post"}
      </h2>

      <div>
        <label>Title</label>
        <input
          className="border w-full p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div>
        <label>Content</label>
        <textarea
          className="border w-full p-2"
          rows={6}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        {errors.content && <p className="text-red-500">{errors.content}</p>}
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? "Saving..." : isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
}
