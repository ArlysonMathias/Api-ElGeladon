const verificarDadosPaletaMiddleware = (req, res, next) => {
  const { sabor, preco, descricao, foto } = req.body;

  if (!sabor || !preco || !descricao || !foto) {
    return res.status(422).send('Dados Incompletos');
  }
  next();
};

export default verificarDadosPaletaMiddleware;