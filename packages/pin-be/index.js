import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import route from './src/routes';
import bodyParser from 'body-parser';
import http from "http"
import https from "https"
import fs from "fs"

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["https://localhost:5173"],
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

const sslOptions = {
  key: fs.readFileSync('../../localhost-key.pem'),
  cert: fs.readFileSync('../../localhost.pem'),
};

// app.listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));
// http.createServer(app).listen(process.env.PORT, () => console.log('listening on port ' + process.env.PORT));

https.createServer(sslOptions, app).listen(process.env.PORT, () => console.log('SSL listening on port ' + process.env.PORT));