import Router from 'koa-router';
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from './product.ctrl';


const router = new Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;