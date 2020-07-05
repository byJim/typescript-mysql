import { Router } from 'express';
const router = Router();

//Controllers
import {getPosts, createPost, getPost, deletePost, updatePost} from "../controllers/post";

router.route('/post')
    .get(getPosts)
    .post(createPost);

router.route('/post/:postId')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost)

export default router;
