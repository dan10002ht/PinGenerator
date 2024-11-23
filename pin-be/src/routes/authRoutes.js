import {Router} from 'express';
import * as authController from '../controllers/authController';

const router = new Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
