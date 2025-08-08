import express from 'express';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import http from 'http';
import userRouter from './routes/user.js';
import fileRouter from './routes/file.js';
import cors from 'cors';
import commentRouter from './routes/comment.js';

configDotenv();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

app.use('/user', userRouter);
app.use('/file', fileRouter);
app.use('/comment', commentRouter);

const server = http.createServer(app);

console.log(`${process.env.DB_URL}/${process.env.DATABASE_NAME}`)

mongoose.connect(`${process.env.DB_URL}/${process.env.DATABASE_NAME}`)
.then(() => {
    server.listen(3000, () => {
        console.log("server started at port 3000");
    })
})
.catch((err) => {
    console.log(`ERROR: ${err}`);
})