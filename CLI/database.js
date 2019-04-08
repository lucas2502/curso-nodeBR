const {
    readFile,
    writeFileAsysnc
} = require('fs')

const { 
    promisify
} = require('util')

const readFileAsync = promisify(readFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadosArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())
    }
    async escreverArquivo(dados){
        await writeFileAsysnc(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true;
    }
    async cadastrar(heroi) {
        const dados = await this.obterDadosArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now()
        
        const heroiComId = {
            ...heroi,
            id
        }
        return await this.escreverArquivo([...dados, heroiComId]);
    }
    async listar(id){
        const dados = await this.obterDadosArquivo()
        return dados.filter(item =>(id ?  (item.id === id) : true))
    }

    async remover(id){
        if(!id){
            await this.escreverArquivo([]);
            return true;
        }
        
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if (indice === -1) {
            throw Error('O usuario informado nao existe')
        }
        const atual = dados[indice];
        dados.splice(indice, 1);
        await this.escreverArquivo(dados);
        return true;
    }

    async atualizar(id, modificacoes) {
        const dados = await this.obterDadosArquivo()
        const indice = dados.findIndex(item => item.id === parseInt(id))
        if(indice === -1){
            throw Error('O heroi informado nao existe')
        }
        const atual = dados[indice]
        dados.splice(indice, 1)
        const objAtualizado = JSON.parse(JSON.stringify(atualizacoes));
        const dadoAtualizado = Object.assign({}, atual, objAtualizado);
    
        return await this.escreverArquivo([...dados, dadoAtualizado]);
    }
}

module.exports = new Database ()