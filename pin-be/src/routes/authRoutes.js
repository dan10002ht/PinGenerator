import {Router} from 'express';
import * as authController from '../controllers/authController';

const router = new Router();

router.get('/register', authController.register);
router.get('/login', authController.login);

export default router;
