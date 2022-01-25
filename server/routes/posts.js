import { Router } from "express";
import { deletePost, createPost, getPosts, updatePost } from "../controllers/posts.js";

const router = Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
