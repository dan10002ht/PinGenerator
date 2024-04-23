import {Router} from 'express';
import * as templateController from '../controllers/templateController';

const router = new Router();

router.get('/', templateController.getListTemplate);
router.post('/', templateController.createTemplate);
router.get('/:id', templateController.getTemplate);
// router.put('/:id', templateController.editTemplate);
// router.delete('/', templateController.removeTemplates);

export default router;
