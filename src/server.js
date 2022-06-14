import app from '../app.js';
import { conectarAoDatabase } from './database/index.js';
const port = 8080;

app.listen(port, () => {
  conectarAoDatabase();
  console.log(`Aplicação rodando em ${`http://localhost:${port}`}`);
});
