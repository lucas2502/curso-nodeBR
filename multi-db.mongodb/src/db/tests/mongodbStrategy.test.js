const assert = require('assert')
const MongoDb = require('./../strategies/mongodb')
const Context = require('./../strategies/base/contextStrategy')

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
})