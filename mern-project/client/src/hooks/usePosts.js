import { useState, useEffect } from "react";
import { postService } from "../services/api.js";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0); 

  const fetchPosts = async () => {
    try {
      const response = await postService.getPosts();
      console.log("API returned:", response.data);
      setPosts(response.data.posts);
      setTotal(response.data.total); // optional if needs pagination

    } catch (err) {
      console.error("Failed to fetch posts", err);
    } 
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, total, fetchPosts };
}
