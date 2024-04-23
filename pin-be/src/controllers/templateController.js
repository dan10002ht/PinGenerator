// export const save = async (req, res) => {
//   try {
//     const {imageList, templateNumber} = req.body;
//     const savedData = await db.template.save({
//       imageList,
//       templateNumber
//     });
//     return res.status(200).json(savedData);
//   } catch (e) {
//     return res.status(500).json(e.message);
//   }
// };

import {create, getAll, getById} from '../repositories/templateRepository';

// export const getOne = async (req, res) => {
//   try {
//     const template = await db.template.get(req.params.templateId);
//     return res.status(200).json(template);
//   } catch (e) {
//     return res.status(500).json(e.message);
//   }
// };

// export const getAll = async (req, res) => {
//   try {
//     const templates = await db.template.get();
//     return res.status(200).json(templates);
//   } catch (e) {
//     return res.status(500).json(e.message);
//   }
// };

export const getListTemplate = async (req, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({success: true, data});
  } catch (e) {
    return res.status(500).json({error: e.message, success: false});
  }
};

export const createTemplate = async (req, res) => {
  try {
    const {data} = req.body;
    const docId = await create(data);
    return res.status(200).json({success: true, data: docId});
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({error: e.message, success: false});
  }
};

export const getTemplate = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await getById(id);
    return res.status(200).json({success: true, data});
  } catch (e) {
    return res.status(500).json({error: e.message, success: false});
  }
};

export const updateTemplate = async (req, res) => {
  try {
    const {id} = req.params;
  } catch (e) {}
};
