const express = require('express');
const app = express();

app.use(express.json());

const PORT = 8000

let users = [{ id: 1, name: 'Firat' }];

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

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

module.exports = app;