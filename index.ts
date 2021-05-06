import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { router } from './src/router';

const PORT = 3000;
const app = express();

app.use(json())
app.use(cors({
  origin: '*',
}))

app.use(router);

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});