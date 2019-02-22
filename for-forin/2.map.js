const service = require('./service')

// How to do array.map
Array.prototype.myMap = function (callback){
    const newArrayMap = []
    for( let indice = 0; indice <= this.length -1; indice ++){
        const result = callback(this[indice], indice)
        newArrayMap.push(result)
    }
    return newArrayMap
}

async function main(){
    try{
        const results = await service.obterPessoas('a')
        const names = []

        console.time('forEach')
        results.results.forEach(function (item) {
            names.push(item.name)
        })
        console.timeEnd('forEach')

        console.time('map')
        const names2 = results.results.map(function (pessoa){
            return pessoa.name
        })
        console.timeEnd('map')

        const names3 = results.results.myMap(pessoa => pessoa.name)

        console.log('getNames.ForEach', names)
        console.log('getNames.Map', names2)
        console.log('getNameMyMap', names3)
    } catch (error) {
        console.error('DEU RUIM', error)
    }
}

main()