import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
  cloud_name: 'pin-generator',
  api_key: '12345',
  api_secret: '12345'
});

export default cloudinary;
