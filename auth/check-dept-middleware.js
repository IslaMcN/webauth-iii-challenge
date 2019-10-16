module.exports = dept => {
    return (req, res, next) => {
        if (dept === req.user.department){
            next();
        }else{
            res.status(403).json({
                message: "LEAVE NOW, you are not welcome"
            })
        }
    }
}