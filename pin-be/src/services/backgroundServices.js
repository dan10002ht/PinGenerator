import {Queue} from 'bullmq';

const queue = new Queue('Pinterest-Queue');

const publishBackgroundTask = async (name, data) => {
  queue.add(name, data);
};
