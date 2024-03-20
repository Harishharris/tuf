import express from 'express';
import dbConnect from './db/dbConnect.js';
import cors from 'cors';
import router from './routes/route.js';
import { config } from 'dotenv';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());
config();

app.use('/', router);

app.listen(PORT, async () => {
  try {
    dbConnect();
  } catch (err) {
    console.log(err);
  }
  console.log(`Server running on port ${PORT}`);
});
