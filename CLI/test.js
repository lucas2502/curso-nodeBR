const {
    deepEqual,
    ok
} = require('assert')

const database = require('./database')

const DEFAULR_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    if: 1
}

describe('suite de manipulação de Herois', () => {
    before(() => {
        await database.cadastrar(DEFAULR_ITEM_CADASTRAR)
    })
    
    it('deve pesquisar um heroi usando arquivos', async () =>{
        const expected = DEFAULR_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        
        deepEqual(resultado, expected)
    })
    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULR_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULR_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULR_ITEM_CADASTRAR.id)
        deepEqual(null, expected)
    })
})