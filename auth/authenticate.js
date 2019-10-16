const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'Brooklyn99';

module.exports={
    authenticate,
    jwtKey
};

function authenticate(req, res, next){
    const token = req.get('Authentication');

    if(token){
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err){
                return res.status(400).json(
                    console.log(err)
                );
                
            }
            req.decoded = decoded;
                next();
        })
    }else{
        return res.status(401).json({
            message: "No token, no entry"
        })
    }
}