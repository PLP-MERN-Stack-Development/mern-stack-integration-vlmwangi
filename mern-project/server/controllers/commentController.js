import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    postId: req.params.postId,
    userId: req.user,
  });

  res.json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId })
    .populate("userId", "username");

  res.json(comments);
};
