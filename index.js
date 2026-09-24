const express = require('express');
const app = express();

app.get('/setcookie', (req, res) => {
    res.cookie('data_acesso', `Acessado em ${new Date()}`);
    res.send('Cookie salvo!');
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));