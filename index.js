import express from 'express';
import cors from 'cors';
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
import Connection from './database/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Routes);

const port = process.env.PORT || 5000;

Connection();
app.listen(port,()=>{
console.log(`Your server is running successfully on PORT ${port}`);
})