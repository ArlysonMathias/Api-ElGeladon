import Paleta from '../models/paletas.model.js';

class PaletaService {
  async listarTodas() {
    const paletas = await Paleta.find();

    if (paletas.length == 0) {
      throw { status: 404, message: 'Nenhuma paleta tarefa' };
    }
    return paletas;
  }
  async listarPorId({ id }) {
    const paletaSelecionada = await Paleta.findById({ _id: id });

    return paletaSelecionada;
  }
  async criarNovaPaleta({ sabor, preco, descricao, foto }) {
    const novaPaleta = {
      sabor,
      preco,
      descricao,
      foto,
    };
    try {
      const paleta = await Paleta.create(novaPaleta);
      return paleta;
    } catch (error) {
      throw error;
    }
  }
  async atualizarPaleta({ sabor, preco, descricao, foto, id }) {
    const paletaAtualizada = {
      sabor,
      preco,
      descricao,
      foto,
    };
    try {
      await Paleta.updateOne({ _id: id }, paletaAtualizada);
      const paleta = await Paleta.findById(id);

      return paleta;
    } catch (error) {
      throw error;
    }
  }
  async deletarPaleta({ id }) {
    const paleta = await Paleta.findByIdAndDelete(id);

    return paleta;
  }
}

export default PaletaService;
