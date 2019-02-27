const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const appProvider = require('../src/app')

describe('#indexOf()', function() {
    it('should return -1 when the value is not present', async function() {
        app = await appProvider();

        return request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.docs.length, "should return empty string").to.equal(0);
            })
    });
})