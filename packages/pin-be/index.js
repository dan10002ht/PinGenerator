import express from 'express';
import cors from 'cors';
import route from './src/routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

route(app);

app.listen(process.env.PORT, () => console.log('listening on port ' + appConfig.port));
