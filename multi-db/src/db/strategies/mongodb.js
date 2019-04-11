const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Salvo em mongoDB")
    }
}

module.exports = MongoDB
