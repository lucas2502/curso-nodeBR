const util = require('util')//importando um módulo interno do node.js
const obterEnderecoAsysn = util.promisify(obterEndereco)


const obterUsuario = () => {
    return new Promise(resolvePromise = (resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

const obterTelefone = (idUsuario) => {
    return new Promise(resolvePromise = (resolve, reject) => {    
        setTimeout(() => {
            return resolve({
                telefone: '11009977',
                ddd: '11'
            })
        }, 2000);
    })
}

const obterEndereco = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        }, 2000);
    })

}

//1 passo adicionar a palabra async -> automaticamente ela retornara uma promise
main()
async  function main(){
    try {
        const usuario = await obterUsuario()
        const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsysn(usuario.id)

        console.log(`
            Nome: ${usuario.nome},
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
    }catch (error) {
        console.log('DEU RUIM MANE!', error)
    }
}


/*const usuarioPromise = obterUsuario()

usuarioPromise
    .then((usuario) =>{
        return obterTelefone(usuario.id)
            .then(resolverTelefone = (result) => {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then((resultado) => {
        const endereco = obterEnderecoAsysn(resultado.usuario.id)
        return endereco.then(resolverEndereco = (result) => {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })

    .then((resultado) => {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: ${resultado.telefone.ddd}, ${resultado.telefone.telefone}
        `)
    })
    .catch((error) => {
        console.log('DEU RUIM', error)
    })


/*obterUsuario(function resolverUsuario(error, usuario){
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error) {
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }
            obterEndereco(usuario.id, function resolverEndereco( error2, endereco){
                if(error) {
                    console.error('DEU RUIM em ENDERECO', error2)
                    return;
                }
        
                console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.rua},
                Telefone: (${telefone.ddd})${telefone.numero}
                `)
        })
    
    })
    

})*/

//const telefone = obterTelefone(usuario.id)

//console.log('usuario:', usuario)
//console.log('telefone', telefone)