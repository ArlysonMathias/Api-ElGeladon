import 'dotenv/config';
import app from '../app.js';
import { conectarAoDatabase } from './database/index.js';


app.listen(process.env.PORT, () => {
  conectarAoDatabase();
  console.log(`Aplicação rodando em ${`http://localhost:${process.env.PORT}`}`);
});
