import express from 'express';
import cors from 'cors';
import appConfig from './src/config/appConfig';
import route from './src/routes';
import bodyParser from 'body-parser';
import PuppeteerServices from './src/services/PuppeteerServices';
import fs from 'fs';

const app = express();

app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

route(app);

(async () => {
  const puppeteer = new PuppeteerServices();
  const data = await puppeteer.initialize();
  console.log({data});
})();

app.listen(appConfig.port, () => console.log('listening on port ' + appConfig.port));
