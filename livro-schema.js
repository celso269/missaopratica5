const mongoose = require('./conexao');

const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    editora: String,
    ano: Number
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;