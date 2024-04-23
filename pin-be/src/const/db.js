import serviceAccount from '../../serviceAccount.json';

import * as admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

import {getFirestore} from 'firebase-admin/firestore';

const db = getFirestore();

export default db;
