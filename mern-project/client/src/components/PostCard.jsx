import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div style={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.excerpt || post.content.slice(0, 120) + "..."}</p>
      <Link to={`/posts/${post._id}`} style={styles.link}>Read More</Link>
    </div>
  );
}

const styles = {
  card: {
    padding: "1rem",
    margin: "1rem 0",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  link: {
    textDecoration: "none",
    color: "blue"
  }
};
