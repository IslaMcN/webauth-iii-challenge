const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../data/helpers/user-model');
const secrets = require('../config/secrets.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 22);
    user.password = hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(err => {
        res.status(500).json({
            message: 'cannot add the user', error
        });
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);

            res.status(200).json({
                message: `Why, hello ${user.username}!`, token,
            });
        }else{
            res.status(401).json({
                message: "Who are you?"
            });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

function generateToken(user){
    const payload = {
        username: user.username,
        subject: user.id,
        department: user.department,
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
