const { ExtractJwt,Strategy } = require('passport-jwt')
const passport = require('passport')
const {findUserById} = require('../users/users.controllers')

const passportConfigs = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'academlo'
}

passpor.use(new Strategy(passportConfigs, (tokenDecoded, done)=>{
    findUserById(tokenDecoded.id)
    .then(data=>{
        
    })
    .catch(error =>{

    })
}))