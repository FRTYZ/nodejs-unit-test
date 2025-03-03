const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'Ali' }];

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req,res) => {
    const newUser = {id: users.length + 1, name: req.body.name};

    users.push(newUser);
    
    res.status(201).json(newUser)
});

app.put('/users/:id', (req, res) => {
    const user = users.find((item) => item.id === parseInt(req.params.id));

    if(!user) return res.status(404).json({message: 'not found'})

    user.name = req.body.name;

    res.json(user)
})

app.delete('/users/:id', (req,res) => {
    users = users.find(item => item.id !== parseInt(req.params.id));

    res.status(204).send()
})

module.exports = app;