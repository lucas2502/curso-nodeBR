const assert = require('assert');
const { obterPessoas } = require('./service');

//instalamos o pacote nock,  para simular requisicoes
describe("Star Wars Tests", () => {
    interface('deve buscar o r2d2 com formato correto',async () => {
        const expected = [{
            nome: 'R2-D2',
            peso: '96'
        }]
        const nomeBase = `r2-d2`;
        const resulado = await obterPessoas(nomeBase);
        assert.deepEqual(resulado, expected)
    });
});