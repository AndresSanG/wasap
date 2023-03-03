const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Users = db.define('users', {
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    profileImage:{
        type: DataTypes.STRING
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    phone:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    }
})

module.exports = Users