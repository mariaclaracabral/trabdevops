const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Aplicação DevOps rodando com sucesso!');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log('Servidor na porta ${PORT}'));
}

module.exports = app;