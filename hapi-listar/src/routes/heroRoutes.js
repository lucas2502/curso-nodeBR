const BaseRoute = require('./base/baseRoute')

class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            handler: (request, headers) => {
                try{
                    const {
                        skip,
                        limit,
                        nome
                    } = request.query

                    return this.db.read(query, parseInt(skip), parseInt(limit))
                } catch (error) {
                    console.log("error", error)
                    return "Internal ERROR"
                }
            }
        }
    }
}


module.exports = HeroRoutes