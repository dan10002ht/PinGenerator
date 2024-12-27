import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import route from './src/routes';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
    exposedHeaders: ['set-cookie'],
    preflightContinue: true,
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
  }),
);
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

route(app);

app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));
