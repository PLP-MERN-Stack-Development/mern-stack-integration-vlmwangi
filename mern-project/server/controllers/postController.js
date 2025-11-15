import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "", category } = req.query;

    const filter = {
      title: { $regex: search, $options: "i" },
    };

    if (category) filter.category = category;

    const posts = await Post.find(filter)
      .populate("category")
      .populate("author", "username")
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Post.countDocuments(filter);

    res.json({ posts, total });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate("category")
    .populate("author", "username");

  res.json(post);
};

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.user,
      image: req.file?.path || null,
    });

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const updated = await Post.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  res.json(updated);
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
