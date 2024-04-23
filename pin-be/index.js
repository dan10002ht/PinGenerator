import express from 'express';
import cors from 'cors';
import appConfig from './src/config/appConfig';
import route from './src/routes';

const app = express();

app.use(cors());
app.use(express.json());

route(app);

app.listen(appConfig.port, () => console.log('listening on port ' + appConfig.port));
