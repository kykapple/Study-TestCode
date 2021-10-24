const app = require('../app');
const request = require('supertest');
const should = require('should');

describe('GET /api/user?name=apple', () => {
    describe('성공시', () => {
        it('name에 해당하는 user 반환', (done) => {
            request(app)
                .get('/api/user')
                .query({ name: 'apple' })
                .end((err, res) => {
                    res.body.should.have.property('name', 'apple');
                    done();
                });
        });
    });
});
