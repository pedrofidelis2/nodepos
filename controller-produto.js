import ProdutoRepo from "./model-produto.js";
import { Op } from "sequelize";

export async function imprimirTodos(){
    const produtos = await ProdutoRepo.findAll();
    console.log(JSON.stringify(produtos));
}

export async function obterTodos(){
    return await ProdutoRepo.findAll();
}

export async function obterProduto(codigo){
    return await ProdutoRepo.findByPk(codigo);
}

export async function criarProduto(nome, quantidade){
    const produto = await ProdutoRepo.create({ nome, quantidade });
    return produto.codigo;
}

export async function alterarProduto(codigo, nome, quantidade){
    let produto = await ProdutoRepo.findByPk(codigo);
    produto.nome = nome;
    produto.quantidade = quantidade;
    await produto.save();
}

export async function zerarQtd(){
    const [updateRows] = await ProdutoRepo.update(
        { quantidade: 0 }, 
        { where: { quantidade: null} }
);
    return updateRows;
}

export async function removerProduto(codigo){
    let produto = await ProdutoRepo.findByPk(codigo);
    await produto.destroy();
}
