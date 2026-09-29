import express from 'express';
const app = express();
const port = 3000;

let tarefas = [ { tarefa: "compilar"}, { tarefa: "testar" } ];

app.get( [ '/', '/tarefas' ], (req, res) => {
    let conteudo = "<html><body><h1>Lista de Tarefas</h1><ul>";
    for (let t of tarefas) 
        conteudo += `<li>${t.tarefa}</li>`;
    conteudo += "</ul></body></html>";
    res.status(200)
        .contentType('text/html')
        .send(conteudo);
})

app.listen(3000);