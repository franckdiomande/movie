const jwt = require('jsonwebtoken');

const createToken = function(user){
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: 3600 * 24,
        algorithm: 'HS256'
    })
}

const verifyJWTToken = function(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
            if(error || !decodedToken){
                reject(error)
            }
            resolve(decodedToken);
        })
    })
    
}
 module.exports = {
    createToken,
    verifyJWTToken
 }