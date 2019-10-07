const app = require('express')()
const cors = require('cors')
require('express-async-errors')

module.exports = (req,res,next) =>{
    console.log(JSON.stringify(req.headers))
    console.log('here')
    next()
}