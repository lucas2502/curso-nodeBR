 class NotImplementException extends Error {
     constructor() {
         super("Not Impemented Exception")
     }
 }

 class Icrud {
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
 }

class MongoDB extends ICrud {
    constructor() {
        super()
    }

    create(item) {
        console.log("Salvo em mongoDB")
    }
}

 class ContextStrategy extends Icrud {
     constructor(strategy) {
         this._database = strategy
     }

     create(item) {
         return this._database.create(item)
     }
     
     read(item) {
         return this._database.read(item)
     }

     update(id, item) {
         return this._database.read(id, item)
     }

     delete(id) {
         return this._database.delete(id)
     }

 }

 const contextMongo = new ContextStrategy(new MongoDB())
 contextMongo.create()

 const contextPostgres = new ContextStrategy(new contextPostgres())
 contextPostgres.create()