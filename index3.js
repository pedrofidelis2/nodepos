const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("A");
    res.write("B");
    res.end("C");
}).on("close", () => console.log("Servidor encerrado"));    

server.listen(3000, () => {
    console.log("Servidor a escutar na porta 3000...");

    const req = http.request({ hostname: 'localhost', port: 3000, method: 'GET' }, 
        (res) => {
            res.on('data', (d) => console.log("Resp: " + d.toString()));
            res.on('end', () => console.log("Fim da comunicação"));
            res.on('close', () => console.log("Conexão encerrada"));
    });

    req.on('error', (e) => console.error(`Erro na requisição: ${e.message}`));
    req.end();
});

setTimeout(() => {
    server.close();
}, 5000);