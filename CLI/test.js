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
    it('deve pesquisar um heroi usando arquivos', async () =>{
        const expected = DEFAULR_ITEM_CADASTRAR
        const resultado = await database.listar(expected.id)
        deepEqual(resultado, expected)
    })
    
    /*it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULR_ITEM_CADASTRAR

        ok(null, expected)
    })*/
})