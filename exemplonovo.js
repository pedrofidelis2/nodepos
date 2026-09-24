import ProdutoRepo from "./model-produto.js";

export async function imprimirTodos() {
    const produtos = await ProdutoRepo.findAll();
    console.log(JSON.stringify(produtos));
}

ProdutoRepo.findAll().then((produtos) => console.log(JSON.stringify(produtos)));
imprimirTodos();