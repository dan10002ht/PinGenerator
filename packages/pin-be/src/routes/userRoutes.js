import {Router} from 'express';
import * as userController from '../controllers/userController';
import authMiddleware from '../middlewares/authenticate';

const router = new Router();

// router.use(authMiddleware);

router.get('/', userController.get);

export default router;
