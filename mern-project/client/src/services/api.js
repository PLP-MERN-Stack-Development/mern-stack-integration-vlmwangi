import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Base URL for Express backend
});

// Interceptor to attach JWT token for authentication
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// 1. POSTS Service 
export const postService = {
    getPosts: () => API.get('/posts'),
    getSinglePost: (id) => API.get(`/posts/${id}`),
    createPost: (data) => API.post('/posts', data),
    updatePost: (id, data) => API.put(`/posts/${id}`, data),
    deletePost: (id) => API.delete(`/posts/${id}`),
};

// 2. CATEGORY Service 
export const categoryService = {
    getCategories: () => API.get('/categories'),
    createCategory: (data) => API.post('/categories', data),
};

// 3. AUTH Service 
export const authService = {
    register: (data) => API.post('/auth/register', data),
    login: (data) => API.post('/auth/login', data),
};

export default API;