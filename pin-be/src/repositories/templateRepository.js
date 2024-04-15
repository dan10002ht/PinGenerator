import db from '../const/db';
import formatDateFields from '../helpers/formatDateFields';

const collection = db.collection('pinQueue');

export const create = async data => {
  const doc = await collection.add({...data, createdAt: new Date()});
  return doc.id;
};

export const update = async ({id, data}) => {
  return await collection.doc(id).update(data);
};

export const bulkUpdate = async ({ids, data}) => {
  return await Promise.all(ids.map(id => update({id, data})));
};

export const bulkDelete = async ids => {
  return await Promise.all(ids.map(id => collection.doc(id).delete()));
};
