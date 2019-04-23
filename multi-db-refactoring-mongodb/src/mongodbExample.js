const Mongoose = require('mongoose')
Mongoose.connect('mongodb://@192.168.0.186:27017/db_test', 
    { useNewUrlParser: true}, function (error) {
        if(!error) return;
        console.log('Falha na conexão', error)
    })

    const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!'))
/*
const state = connection.readyState
console.log('state', state)

    0: Disconectado
    1: Conectado
    2: Conectando
    3: Disconectando
*/
const heroiSchema = new Mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    poder: {
        type: String,
        required: true
    },
    insertedAt: {
        type: Date,
        default: new Date()
    }
})

const model = Mongoose.model('herois', heroiSchema)

async function main() {
    const resultCadastrar = await model.create({
        nome: 'Batman',
        poder: 'Dinheiro'
    })
    console.log('result cadastrar', resultCadastrar)

    const lisItens = await model.find()
    console.log('items', lisItens)

}

main()