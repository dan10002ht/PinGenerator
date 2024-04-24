import {Router} from 'express';
import pinterestRoutes from './pinterestRoutes';
import templateRoutes from './templateRoutes';

const router = new Router();

function route(app) {
  app.use('/api', router);
  router.use('/pinterest', pinterestRoutes);
  router.use('/template', templateRoutes);
}

export default route;
