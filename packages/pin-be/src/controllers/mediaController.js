import {handleUpload} from '../helpers/media/uploadCloudinary';

export const uploadImage = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    let dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;
    const cldRes = await handleUpload(dataURI);
    return res.status(200).json({data: cldRes, success: true});
  } catch (e) {
    return res.status(500).json({success: false, error: e.message});
  }
};
