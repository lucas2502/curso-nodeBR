class NotImplementException extends Error {
    constructor() {
        super("Not Impemented Exception")
    }
}

class ICrud {
    create(item) {
        throw new NotImplementException()
    }

    read(query) {
        throw new NotImplementException()
    }

    update(id, item) {
        throw new NotImplementException()
    }

    delete(id) {
        throw new NotImplementException()
    }

    isConnected() {
        throw new NotImplementException()
    }

    connect(){
        throw new NotImplementException()
    }
}

module.exports = ICrud