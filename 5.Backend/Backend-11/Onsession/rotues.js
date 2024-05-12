const express = require('express');

const router = express.Router();

const {User} = require('./models/user.model');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ums')
.then(resp=>console.log('connected to db'))
.catch(err=>console.log('error connecting to db', err))

console.log('');

router.get('/', (req, res) => {
    const user = User.find()
    res.send(user)
    })

    router.post('/', (req, res) => {    
        const {name, email, username, password} = req.body;

        if (!name || !email || !username || !password) {
            return res.status(400).send('All fields are required');
        }

        const user = new User({
            name,
            email,
            username,
            password
        });

        user.save()
        .then(user => {
            res.send(user);
        })

        .catch(err => {
            res.status(500).send('Error occured while saving user');
        })


    })

    router.delete('/:id', (req, res) => {
        const {id} = req.params;

        User.findByIdAndDelete(id)
        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }

            res.send(user);
        })

        .catch(err => {
            res.status(500).send('Error occured while deleting user');
        })
    })

    router.post('/login', (req, res) => {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).send('All fields are required');
        }

        User.findOne({username, password})

        .then(user => {
            if (!user) {
                return res.status(404).send('User not found');
            }

            res.status(200).send(`User logged in successfully ${user}`);
        })
    })

module.exports = router;

