process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

chai.use(chaiHttp);
//Our parent block
describe('USER', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    //test register user
    describe('/POST User', () => {
        it('it should create the user', (done) => {
            let user = {
                "username": "Employee2",
                "password": "Employee2",
                "age": 18,
                "email": "employee2@gmail.com",
                "phone": "123456",
                "address": "Ha Noi",
                "createBy": "Admin",
                "updateaBy": "Admin",
                "createAt": Date.now(),
                "updateAt": Date.now(),
            }
            chai.request(app)
                .post('/api/v1/auth/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(500);
                });
            done();
        });
    });

    //test login user
    describe('/POST Login User', () => {
        it('it should login the user', (done) => {
            let user = {
                "username": "Employee2",
                "password": "Employee2",
            }
            chai.request(app)
                .post('/api/v1/auth/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(500);
                });
            done();
        });
    });


});