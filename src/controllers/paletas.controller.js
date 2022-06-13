import PaletaService from '../services/paletas.services.js';

const paletaService = new PaletaService();

class PaletaController {
  async listarTodas(req, res) {
    const paleta = await paletaService.listarTodas();

    res.send(paleta);
  }
  async listarPorId(req, res) {
    const id = req.params.id;
    try {
      const paleta = await paletaService.listarPorId({ id });

      res.send(paleta);
    } catch (error) {
      res.status(404).send('Paleta não encontrada');
    }
  }
  async criarPaleta(req, res) {
    const { sabor, preco, descricao, foto } = req.body;

    try {
      const novaPaleta = await paletaService.criarNovaPaleta({
        sabor,
        preco,
        descricao,
        foto,
      });

      res.status(201).send(novaPaleta);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Tarefa já cadastrada');
      }
    }
  }
  async atualizarPaleta(req, res) {
    const { sabor, preco, descricao, foto } = req.body;
    const id = req.params.id;
    try {
      const paletaAtualizada = await paletaService.atualizarPaleta({
        sabor,
        preco,
        descricao,
        foto,
        id
      });

      res.status(201).send(paletaAtualizada);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Tarefa já cadastrada');
      }
    }
  }
  async deletarPaleta(req, res) {
    const id = req.params.id;
    const paleta = await paletaService.deletarPaleta( {id} );

    res.status(200).send(paleta);
  }
}

export default PaletaController;
