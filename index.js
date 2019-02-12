

const obterUsuario = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

const obterTelefone = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            telefone: '11009977',
            ddd: '11'
        })
    }, 2000);
}

const obterEndereco = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        }, 2000);
    })

}

const resolverUsuario = (erro, usuario) => {
    console.log('usuario:', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
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
    

})

//const telefone = obterTelefone(usuario.id)

//console.log('usuario:', usuario)
//console.log('telefone', telefone)