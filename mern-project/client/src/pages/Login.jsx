import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../services/api.js";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data.token);
      setMsg("Logged in!");
    } catch (err) {
      setMsg("Error: " + err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default Login;
