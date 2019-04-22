const assert = require('assert')
const MongoDb = require('./../strategies/mongodb')
const Context = require('./../strategies/base/contextStrategy')

const MOCK_HEROIS_CADASTRAR = {
    nome: 'Mulher maravilha',
    poder: 'Laço'
}
const context = new Context(new MongoDb())
describe('MongoDB suite de testes', function () {
    this.beforeAll(async () => {
        await context.connect()
    })
    it('verificar conexao', async () => {
        const result = await context.isConnected()
        const expected = "conectado"

        assert.deepEqual(result, expected)
    })

    it('cadastrar', async () => {
        const { nome, poder} = await context.create(MOCK_HEROIS_CADASTRAR)
        assert.deepEqual({ nome,poder}, MOCK_HEROIS_CADASTRAR )
    })
    it('listar', async () => {
        const [{nome, poder}] = await context.read({nome: MOCK_HEROIS_CADASTRAR})
        const result = {
            nome, poder
        }
        assert.deepEqual(result, MOCK_HEROIS_CADASTRAR)
    })
})