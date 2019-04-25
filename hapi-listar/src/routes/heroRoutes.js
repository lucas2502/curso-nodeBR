const BaseRoute = require('./base/baseRoute')
const Joi = require('joi')

class HeroRoutes extends BaseRoute {
    constructor(db) {
        super()
        this.db = db
    }

    list() {
        return {
            path: '/herois',
            method: 'GET',
            config: {
                validate: {
                    failAction: (request, headers, erro) => {
                        throw erro;
                    },
                    query: {
                        skip: Joi.number().integer().default(0),
                        limit: Joi.number().integer().default(10),
                        nome: Joi.string().min(3).max(100)
                    }
                }
            },
            handler: (request, headers) => {
                try{
                    const {
                        skip,
                        limit,
                        nome
                    } = request.query
                    
                    const query = {
                        nome: {$regex: `.*${nome}*.`}
                    }

                    return this.db.read(nome ? query : {}, skip, limit)

                } catch (error) {
                    console.log("error", error)
                    return "Internal ERROR"
                }
            }
        }
    }

    create() {
        return {
            path: '/herois',
            method: 'POST',
            config: {
                validate: {
                    payload: {
                        nome: Joi.string().required().min(3).max(100),
                        poder: Joi.string().required().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const {
                        nome,
                        poder
                    } = request.payload
                    const result = await this.db.create({
                        nome,
                        poder
                    })
                    return {
                        message: 'Heroi cadastrado com sucesso!',
                        _id: result._id
                    }
                } catch(error) {
                    console.log('ERROR', error)
                    return "internal error!"
                }
            }
        }
    }

    update() {
        return {
            path: '/herois/{id}',
            method: 'PATCH',
            config: {
                validate: {
                    params: {
                        id: Joi.string().required()
                    },
                    payload: {
                        nome: Joi.string().min(3).max(100),
                        poder: Joi.string().min(2).max(100)
                    }
                }
            },
            handler: async (request) => {
                try {
                    const {
                        id
                    } = request.params;

                    const {
                        payload
                    } = request

                    const dadosString = JSON.stringify(payload)
                    const dados = JSON.parse(dadosString)

                    const result = await this.db.update(id, dados)

                    if (result.nModified !== 1) return {
                        message: 'Não foi possivel atualizar'
                    }
                    return {
                        message : 'Heroi atualizado com sucesso!'
                    }

                } catch (error) {
                    console.error('ERROR', error)
                    return 'Erro Interno!'
                }
            }
        }
    }

    delete() {
        return {
            psth: '/heroi/{id}',
            method: 'DELETE',
            config: {
                validate: {
                    params: {
                        id: Joi.string().required()
                    }
                }
            },
            handler: async (request) => {
                try {
                    const {id} = request.params
                    const result = await db.delete(id)

                    if(result.n !== 1) 
                        return {
                            message: 'Não foi possivel remover o item'
                        }
                    
                    return {
                        message: 'Heroi Removido com sucesso!'
                    }

                } catch (error) {
                    console.log('ERROR', error)
                    return 'Error Interno!'
                }
            }
        }
    }
}


module.exports = HeroRoutes