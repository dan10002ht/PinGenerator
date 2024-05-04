import streamifier from 'streamifier';
import cloudinary from '../../config/cloudinary';

export async function uploadBufferImage({imageBuffer}) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'templates',
        upload_preset: 'ml_default'
      },
      async (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(imageBuffer).pipe(uploadStream);
  });
}

export async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto'
  });
  return res;
}
