import {Worker} from 'bullmq';

export default function worker() {
  // Redis connection details
  const workerConnectionOptions = {
    host: process.env.hostname,
    port: 5002,
    password: process.env.password
  };

  const workerInstance = new Worker('pinQueue', workerJobHandler, {
    connection: workerConnectionOptions
  });

  const workerJobHandler = job => {
    console.log(`======== Handling ${job.id} =========`);
    console.log({job});
    // Execute pinqueue jobs
    return;
  };

  workerInstance.on('completed', async job => {
    console.log(`[${job.id}] entering job completion stage!`);
    console.log(`[${job.id}] has completed!`);
  });

  workerInstance.on('failed', (job, err) => {
    console.error(`[${job.id}] has failed with ${err.message}`);
    console.error(err);
  });

  workerInstance.on('error', err => {
    console.error(`WorkerInstance has errored with ${err.message}`);
  });
}
