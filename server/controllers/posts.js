import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error({ message: "Invalid Id", code: 404 });
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true, runValidators: true });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(err.code || 500).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      throw new Error({ message: "Invalid Id", code: 404 });
    }
    await PostMessage.findByIdAndRemove(_id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(err.code || 500).json({ message: err.message });
  }
};
