const request = require('supertest');
const app = require('./server');

describe('User API Tests', () => {

    it('should get all users', async() => {
        const res = await request(app).get('/users');

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ id: 1, name: 'Firat' }])
    });

    it('should create a new user', async() => {

        const res = await request(app)
            .post('/users')
            .send({name: 'Mehmet'});

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Mehmet')
    })

    it('should update a user', async () => {
        const res = await request(app)
            .put('/users/1')
            .send({name: 'Veli'})

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Veli')
    })

    it('should delete a user', async () => {
        const res = await request(app)
            .delete('/users/1')

        expect(res.statusCode).toBe(204)
    })

})