import {Router} from 'express';
import pinterestRoutes from './pinterestRoutes';
import templateRoutes from './templateRoutes';
import authRoutes from './authRoutes';

const router = new Router();

function route(app) {
  app.use('/api', router);
  router.use('/pinterest', pinterestRoutes);
  router.use('/template', templateRoutes);
  router.use('/auth', authRoutes);
}

export default route;
