const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    prfileImage:{
        type:DataTypes.STRING,
    },
    name:{
        type:DataTypes.STRING
    },
    createdBy:{
        type:DataTypes.UUID
    },
    isGroup:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

module.exports = Conversations