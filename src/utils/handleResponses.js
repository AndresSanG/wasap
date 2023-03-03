// EXIto
const success = ({status,data,message,res}) => {
    res.status(status).json({
        error:false,
        status:status,
        message:message,
        data:data
    })
}
//ERRores
const error = ({status,data,message,res, fields}) => {
    res.status(status).json({
        error:true,
        status:status,
        message: message,
        fields:fields
    })
}

module.exports = {
    success,
    error
}