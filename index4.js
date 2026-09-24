import redis from "redis";
import { obterProduto} from "./controller-produto.js";

let redisClient;

(async () => {
    redisClient = redis.createClient();
    redisClient.on("error", (error) => console.error(`Erro no Redis: ${error}`));
    redisClient.on("connect", () => console.log("Conectado ao Redis!"));
    await redisClient.connect();
})();

const obter = async (codigo) => {
    let isCached = false, result;
    const cacheResults = await redisClient.get(`produto:${codigo}`);
    if(cacheResults) {
        isCached = true;
        result = JSON.parse(cacheResults);
    }else{
        result = await obterProduto(codigo);
        await redisClient.set(`produto:${codigo}`, JSON.stringify(result));
    }
    return { fromCache: isCached, produto: result };
}

obter(1).then((x) => console.log(JSON.stringify(x)));
obter(2).then((x) => console.log(JSON.stringify(x)));
obter(1).then((x) => console.log(JSON.stringify(x)));