import app from '../app.js';
import { conectarAoDatabase } from './database/index.js';
import dotenv from 'dotenv';
const port = process.env.PORT || 8080;
dotenv.config();

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`Aplicação rodando em ${`http://localhost:${port}`}`);
});
