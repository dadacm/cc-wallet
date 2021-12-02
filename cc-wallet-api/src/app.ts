import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as  logs from 'morgan';
import { connectDb } from './config/db';
import { userRouter } from './routes/userRoute';
import { countRouter } from './routes/countRoute';

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logs('dev'));

connectDb();

app.use('/user', userRouter);
app.use('/count', countRouter);
app.use('/', (req, res) => res.send('wallet api'));