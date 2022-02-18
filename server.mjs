import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './configs/Database.mjs';
import router from './routes/index.mjs';

dotenv.config();

try {
    await db.authenticate()
    console.log('database connected...');
} catch (error) {
    console.error(error)
}

const server = express()
const port = process.env.PORT || 8080;

server.use(cors())
server.use(express.json())
server.use(router)

server.listen(port, () => console.log(`server is listening on port ${port}...`))