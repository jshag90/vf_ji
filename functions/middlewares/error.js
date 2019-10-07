const app = require('express')()
const cors = require('cors')
require('express-async-errors')

module.exports = (err, req, res, next) =>{
    if(err.message === 'abc') return res.status(403).send('auth faild')
    res.send(err.message)
}