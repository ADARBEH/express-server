'use strict';

const supertest = require("supertest");

const server = require('../server')

const request = supertest(server.app)

describe('API server', () => {
    it('Home page works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World')
    });


})

describe('POST /person', function () {
    it('person page works', function (done) {
        request
            .post('/person')
            .send({
                persons_name:'ibraheem',
                persons_age: 25 + 5 ,
                persons_gender:'male'
            
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

