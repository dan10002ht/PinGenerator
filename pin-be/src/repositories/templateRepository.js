import db from '../const/db';
import {prepareDoc} from '../helpers/prepare';

const collection = db.collection('template');

/**
 *
 * @param id
 * @returns {Promise<*>}
 */
export const getById = async id => {
  const doc = await collection.doc(id).get();
  return prepareDoc({doc});
};

/**
 *
 * @returns {Promise<*[]>}
 */
export const getAll = async () => {
  const docs = await collection.get();
  return docs.docs.map(doc => prepareDoc({doc}));
};

/**
 *
 * @param data
 * @returns {Promise<string>}
 */
export const create = async data => {
  const doc = await collection.add({...data, createdAt: new Date()});
  
  return doc.id;
};

/**
 *
 * @param id
 * @param data
 * @returns {Promise<firestoreV1ApiClientInterfaces.WriteResult>}
 */
export const update = async ({id, data}) => {
  return await collection.doc(id).update(data);
};

/**
 *
 * @param ids
 * @param data
 * @returns {Promise<Awaited<unknown>[]>}
 */
export const bulkUpdate = async ({ids, data}) => {
  return await Promise.all(ids.map(id => update({id, data})));
};

/**
 *
 * @param ids
 * @returns {Promise<Awaited<unknown>[]>}
 */
export const bulkDelete = async ids => {
  return await Promise.all(ids.map(id => collection.doc(id).delete()));
};
