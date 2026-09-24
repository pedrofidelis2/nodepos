import http from 'http';
import { criarProduto , obterTodos} from './controller-produto.js';

const server = http.createServer((req, res) => {
    if(req.url==="/produtos" && req.method==="GET")
        obterTodos().then((dados) => res.end(JSON.stringify(dados)));
    else if(req.url==="/produtos" && req.method==="POST"){
        let dados = '';
        req.on( 'data', (x) => dados+=x );
        req.on( 'end', () => {
            const produto = JSON.parse(dados);
            criarProduto(produto.nome, produto.quantidade).then((codigo) => {
                res.statusCode = 201;
                res.end(`Produto criado com sucesso! Código: ${codigo}`);
            }); 
        })
    }else{
        res.statusCode = 404;
        res.end("Rota não encontrada!");
    }
});

server.listen(3000);

/*
const req = http.request(
    {hostname: 'localhost', port:3000, 
    method: 'POST', path:'/produtos'},
    (res) => {
        res.on('data', (d) => console.log(d.toString()));

    }
)

req.write(JSON.stringify({nome:"Pera", quantidade: 100}));
req.end();
*/