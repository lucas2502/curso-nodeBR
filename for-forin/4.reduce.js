const { obterPessoas } = require('./service')

async function main() {
    try {
        const{ results } = await obterPessoas('a')
        
        const pesos = results.map(item => parseInt(item.height))
        console.log('Pesos', pesos)
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })

        console.log('total', total)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()