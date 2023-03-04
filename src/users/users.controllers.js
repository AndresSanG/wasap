const UUID  = require('uuid')
const Users = require('../models/users.models')
const {hashPassword} = require('../utils/crypto')

const findAllUsers = async () => {
    
    const data = await Users.findAll()
    return data
}
const findUserById = async (id) => {
    const data = await Users.findOne({
        where:{id:id}
    })
    return data
}
const findUserByEmail = async (email) =>{
    const data = await Users.findOne({
        where:{
            email:email
        }
    })
    return data
}
const creatNewUser = async (userObj) => {
    const newUser = {
        id:UUID.v4(),
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: hashPassword(userObj.password),
        profileImage: userObj.profileImage,
        //isActive: userObj.isActive,
        phone:userObj.phone
    }
    const data = await Users.create(newUser)
    return data
}
const updateUser = async (id, userObj) => {
    const data = await Users.update(userObj,{where:{id:id}})
    return data[0]
}
const deleteUser = async (id) => {
    const data = await Users.destroy({
        where:{
            id:id
        }
    })
    return data
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    creatNewUser,
    updateUser,
    deleteUser
}