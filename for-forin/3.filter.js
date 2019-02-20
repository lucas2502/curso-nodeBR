const { obterPessoas } = require('./service')

/*
const item = {
    name: 'Name',
    age: 12
}
const { name, age } = item
console.log(name, age)
*/
Array.prototype.meuFilter = function (callback) {
    const lista = []
    for(index in this){
        const item = this[index]
        const result = callback(item, index, this)
        //0, "", null, undefined === false
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main(){
    try{
        const {
            results
        } = await obterPessoas('a')

        const familiaLars = results.filter(item => {
            //por padrão precisa retornar booleano
            //para informar se deve manter ou remover da lista
            //false > remoce da lista
            //true > mantem
            //não encontrou = -1
            //encontrou = posicaoNoArray
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        })
        const names = familiaLars.map(pessoa => pessoa.name)
        console.log(names)

        const familiaLars2 = results.meuFilter((item, index, lista) => {
            console.log(`index: ${index}`, lista.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })
       
    } catch (error){
        console.error('DEU RUIM'. error)
    }
}

main()