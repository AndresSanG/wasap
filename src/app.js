const express = require('express')
const initModels = require('./models/initModels')
const db = require('./utils/database')
const responseHandlers = require('./utils/handleResponses')
const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const app = express()

app.use(express.json())
db.authenticate()
    .then(()=>{console.log('credenciales correctas')})
    .catch(err=>{console.log(err)})

db.sync()
    .then(()=>{console.log('data base sync')})
    .catch(err=>{console.log(err)})

initModels()

app.get('/',(req,res)=>{
    responseHandlers.success({
        res,
        status: 200,
        message: 'WE ARE IN',
        data:{
            "users":"http://localhost:9000/api/v1/users",
            "conversation": "http://localhost:9000/api/v1/conversation"
        }
    })
})
app.use('/api/v1', usersRouter)
app.use('/api/v1/auth',authRouter)
// este al final
app.use('*',(req,res)=>{
    responseHandlers.error({
        res,
        status: 404,
        message: 'URL not found WRONG WAY try with http://localhost:9000/' 
    })
})

app.listen(9000,()=>{
    console.log('running at port 9000')
})