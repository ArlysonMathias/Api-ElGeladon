import mongoose from 'mongoose';

const PaletaSchema = new mongoose.Schema(
  {
    sabor: { type: String, required: true },
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
  },
  { versionKey: false },
);

const Paleta = mongoose.model('paletas', PaletaSchema);

export default Paleta;
