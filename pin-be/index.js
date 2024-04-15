import express from 'express';
import cors from 'cors';
import appConfig from './src/config/appConfig';
import cron from 'node-cron';
import serviceAccount from './src/serviceAccount.json';
import {cert, initializeApp} from 'firebase-admin/app';
import route from './src/routes';
import {Queue, QueueEvents, Worker} from 'bullmq';

const app = express();

app.use(cors());
app.use(express.json());

route(app);

initializeApp({
  credential: cert(serviceAccount)
});

app.listen(appConfig.port, () => console.log('listening on port ' + appConfig.port));

const queue = new Queue('Pinterest-Queue');

cron.schedule(
  '* * * * *',
  () => {
    queue.add(''); // For update to queue
  },
  {
    scheduled: true
  }
);

const worker = new Worker('Pinterest-Queue', async () => {
  // Create new pin -> After that remove pins from collections
});

const queueEvents = new QueueEvents('Pinterest-Queue');

queueEvents.on('completed', data => {
  console.log({data});
});

queueEvents.on('failed', dataError => console.log({dataError}));
