const router = require('express').Router();
const Users = require('../data/helpers/user-model');
const restricted = require('../auth/authenticate')
const checkDept = require('../auth/check-dept-middleware');

router.get('/', restricted, checkDept('HR'), (req, res) => {
    console.log('hi')
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.send(err)
    });
});

module.exports = router;