//npmintall sequelize ph-hstore pg

const Sequelize = require('sequelize');
const driver = new Sequelize(
    'heroes',
    'lucas2502',
    'minhasenhasecreta', {
        host: 'localost',
        dialect: 'minhasenhasecreta',
        quoteIdentfiers: false,
        operatosAlieses: false
    }
)


async function main() {
    const Herois = driver.define('herois', {
        id: {
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            required: true
        },
        poder: {
            type: Sequelize.STRING,
            required: true
        }
    },{
        tableName: 'TB_HEROIS',
        freezeTableName: false,
        timestamps: false
    })
    await Herois.sync()

    const result = await Herois.findAll({ raw: true})

    console.log('resulr', result);
}


main()