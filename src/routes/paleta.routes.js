import PaletaController from '../controllers/paletas.controller.js';
import { Router } from 'express';
import verificarIdPaletaMiddleware from '../middlewares/verificarIdPaleta.middleware.js';
import verificarDadosPaletaMiddleware from '../middlewares/verificarDadosPaletaMiddleware.js';

const paletasRouter = Router();
const paletasController = new PaletaController();


paletasRouter.get('/listar-todas', paletasController.listarTodas);
paletasRouter.get('/paleta/:id', verificarIdPaletaMiddleware ,paletasController.listarPorId);
paletasRouter.post('/criar-paleta',verificarDadosPaletaMiddleware,paletasController.criarPaleta)
paletasRouter.put('/atualizar-paleta/:id', verificarIdPaletaMiddleware ,paletasController.atualizarPaleta)
paletasRouter.delete('/deletar-paleta/:id',verificarIdPaletaMiddleware, paletasController.deletarPaleta)

export default paletasRouter;
