import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MERN Blog</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/posts" style={styles.link}>Posts</Link>
        <Link to="/posts/new" style={styles.link}>Create Post</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    background: "#333",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  link: {
    marginRight: "1rem",
    color: "#fff",
    textDecoration: "none"
  }
};
