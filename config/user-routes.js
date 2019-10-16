const router = require('express').Router();
const Users = require('../data/helpers/user-model');
const restricted = require('../auth/authenticate')
const checkDept = require('../auth/check-dept-middleware');

router.get('/', restricted, checkDept('HR'), (req, res) => {
    Users.find()
    .then(users => {
        res.json({ loggedInUser: req.username, users});
    })
    .catch(err => {
        res.send(err)
    });
});

module.exports = router;