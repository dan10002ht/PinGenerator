import {Queue, RedisConnection} from 'bullmq';

const connection = new RedisConnection({
  host: 'locahost',
  port: 6379
});

const queue = new Queue(PUBLISH_PIN_EVENTS, {connection});

export const addJob = async (queueName, data) => {
  try {
    await queue.add(queueName, data)
  } catch (e) {
    console.log(e);
  }
};
