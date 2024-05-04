import {Router} from 'express';
import * as mediaController from '../controllers/mediaController';
import {upload} from '../middlewares/upload';

const router = new Router();

router.post('/upload', upload.single('my_file'), mediaController.uploadImage);

export default router;
