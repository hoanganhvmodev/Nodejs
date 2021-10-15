process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

chai.use(chaiHttp);
//Our parent block
describe('EMPLOYEE', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    //test get all employee
    describe('/GET Employee', () => {
        it('it should GET all the Employee', (done) => {
            chai.request(app)
                .get('/api/v1/auth/employee')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    })

    //test get employee id
    describe('/GET Employee/:id', () => {
        it('it should GET the Employee', (done) => {
            chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id');
                    res.body.should.have.property('userid');
                    res.body.should.have.property('firstName');
                    res.body.should.have.property('lastName');
                    res.body.should.have.property('avatar');
                    res.body.should.have.property('address');
                    res.body.should.have.property('CMND');
                    res.body.should.have.property('BHXH');
                    res.body.should.have.property('isDeleted');
                    res.body.should.have.property('createBy');
                    res.body.should.have.property('createAt');
                    res.body.should.have.property('updateAt');
                    res.body.should.have.property('updateaBy');
                });
            done();
        });
    });

    //test create employee
    describe('/POST Employee', () => {
        it('it should create the form', (done) => {
            let employee = {
                "firstName": "Pham",
                "lastName": "Thu Thuy",
                "CMND": "",
                "BHXH": "",
                "createAt": Date.now(),
                "updateAt": Date.now(),
            }
            chai.request(app)
                .post('/api/v1/auth/employee')
                .send(employee)
                .end((err, res) => {
                    res.should.have.status(500);
                });
            done();
        });
    });

    //test update employee 
    describe('/PUT Employee', () => {
        it('it should update the Employee', (done) => {
            let employee = {
                "firstName": "Pham",
                "lastName": "Thu Thuy",
                "CMND": "",
                "BHXH": "",
                "createAt": Date.now(),
                "updateAt": Date.now(),
            }
            chai.request(app)
                .put('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .send(employee)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    //test delete employee
    describe('/DELETE/:id Employee', () => {
        it('it should DELETE a Employee given the id', (done) => {
            let id = '44ee1926-2ef3-4448-b978-04c0d6e3035d';
            chai.request(app)
                .delete('/api/v1/auth/employee/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

});