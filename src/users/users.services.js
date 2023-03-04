const { findAllUsers, findUserById, creatNewUser, deleteUser, updateUser } = require("./users.controllers")
const responseHandlers = require('../utils/handleResponses')
const getAllUsers = (req,res) => {
    findAllUsers()
    .then((data) => {
        responseHandlers.success({
            res,
            status:200,
            message:'all users in database',
            data,
        })
    })
    .catch(error => {
        responseHandlers.error({
            res,
            data:error,
            status:400,
            message: ' we can not show all users'
        })
    })
}

const getUserById = (req,res) => {
    const id = Number(req.params.id)
    findUserById(id)
    .then((data)=>{
        if(data){
            responseHandlers.success({
                res,
                data,
                status:200,
                message: 'user found with id '+data.id
            })
        }else{
            responseHandlers.error({
                res,
                status:404,
                message: 'user not found'
            })
        }
    })
    .catch(error => {
        responseHandlers.error({
            res,
            data:error,
            status:400,
            message: ' we can not show this user'
        })
    })
}

const postNewUser = (req,res) => {
    const userObj = req.body
    creatNewUser(userObj)
    .then((data) => {
        responseHandlers.success({
            res,
            status:201,
            data,
            message:'you created new user'
        })
    })
    .catch(error => {
        responseHandlers.error({
            res,
            data:error,
            status:400,
            message: ' we can not create user'
        })
    })

}

const deleteUserId = (req,res) =>{
    const id = Number(req.params.id)
    deleteUser(id)
    .then((data)=>{
        if(data){
            responseHandlers.success({
                res,
                data,
                status:200,
                message: 'deleted user'
            })
        }else{
            responseHandlers.error({
                res,
                status:404,
                message: 'user not found'
            })
        }
    })
    .catch(error => {
        responseHandlers.error({
            res,
            data:error,
            status:400,
            message: ' we can not show this products'
        })
    })
}

const patchUser = (req,res) =>{
    const id = req.params.id
    const userObj = req.body
    updateUser(id,userObj)
    .then((data)=>{
        if(data){
            responseHandlers.success({
                res,
                data,
                status:200,
                message: `user with Id ${id} updated succesfully`
            })
        }else{
            responseHandlers.error({
                res,
                status:404,
                message: 'inavlid Id or no params to update'
            })
        }
    })
    .catch(error => {
        responseHandlers.error({
            res,
            data:error,
            status:400,
            message: ' we can not found this user'
        })
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser,
    deleteUserId,
    patchUser
}