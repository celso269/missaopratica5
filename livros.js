const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    const livro = req.body;
    const resultado = await incluir(livro);
    res.json({ mensagem: 'Livro adicionado com sucesso!', livro: resultado });
});

router.delete('/:id', async (req, res) => {
    const codigo = req.params.id;
    const resultado = await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso!', resultado });
});

module.exports = router;