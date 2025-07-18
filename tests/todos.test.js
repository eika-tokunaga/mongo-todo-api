const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/testdb', {});
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('Todo API', () => {
    it('creates a todo', async () => {
        const res = await request(app).post('/todos').send({ text: 'Test task'});
        expect(res.statusCode).toBe(200);
        expect(res.body.text).toBe('Test task');
    })
});