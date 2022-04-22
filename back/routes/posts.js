import express from "express"
import { getPost,createPost, deletePost, updatePost} from "../controllers/posts.js";

const router=express.Router();

router.get("/",getPost)
router.post("/",createPost)
router.delete("/:id",deletePost)
router.patch("/:id",updatePost)

export default router;