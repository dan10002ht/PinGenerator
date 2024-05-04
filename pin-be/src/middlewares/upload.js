import Multer from 'multer';

const storage = new Multer();
export const upload = Multer({
  storage
});
