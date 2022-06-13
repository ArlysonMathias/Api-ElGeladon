import express from 'express';
import cors from 'cors';
import paletasRouter from './src/routes/paleta.routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/paletas', paletasRouter);

export default app;
