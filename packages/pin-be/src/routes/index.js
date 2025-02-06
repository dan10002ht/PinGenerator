import {Router} from 'express';
import pinterestRoutes from './pinterestRoutes';
import templateRoutes from './templateRoutes';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';

const router = new Router();

function route(app) {
  app.use('/api', router);
  router.use('/pinterest', pinterestRoutes);
  router.use('/template', templateRoutes);
  router.use('/auth', authRoutes);
  router.use('/user', userRoutes);
  // router.get("*", (req, res) => res.status(404).json({success: false, message: 'Page not found'}));
}

export default route;
