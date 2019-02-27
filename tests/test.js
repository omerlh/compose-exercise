const request = require('supertest');
const appProvider = require('../src/app')

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        app = await appProvider();
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
})