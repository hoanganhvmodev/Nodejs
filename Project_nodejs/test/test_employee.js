process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
let token = require('./token.json');

chai.use(chaiHttp);
//Our parent block
describe('EMPLOYEE', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    //test Admin get all employee
    describe('/GET Employee', () => {
        it('Admin GET all the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee')
                .set('Authorization', token.Admin);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.Employee.should.be.a('array');
        });
    });

    //test Drirector get all employee
    describe('/GET Employee', () => {
        it('Drirector GET all the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee')
                .set('Authorization', token.Drirector);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.Employee.should.be.a('array');
        });
    });

    //test HR get all employee
    describe('/GET Employee', () => {
        it('HR GET all the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee')
                .set('Authorization', token.HR);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.data.Employee.should.be.a('array');
        });
    });

    //test Admin get employee id
    describe('/GET Employee/:id', () => {
        it('Admin GET the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.body.data.employee.should.have.property('id');
            res.body.data.employee.should.have.property('userid');
            res.body.data.employee.should.have.property('firstName');
            res.body.data.employee.should.have.property('lastName');
            res.body.data.employee.should.have.property('avatar');
            res.body.data.employee.should.have.property('address');
            res.body.data.employee.should.have.property('CMND');
            res.body.data.employee.should.have.property('BHXH');
        });
    });

    //test Drirector get employee id
    describe('/GET Employee/:id', () => {
        it('Drirector GET the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .set('Authorization', token.Drirector)
            res.should.have.status(200);
            res.body.data.employee.should.have.property('id');
            res.body.data.employee.should.have.property('userid');
            res.body.data.employee.should.have.property('firstName');
            res.body.data.employee.should.have.property('lastName');
            res.body.data.employee.should.have.property('avatar');
            res.body.data.employee.should.have.property('address');
            res.body.data.employee.should.have.property('CMND');
            res.body.data.employee.should.have.property('BHXH');
        });
    });

    //test HR get employee id
    describe('/GET Employee/:id', () => {
        it('HR GET the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .set('Authorization', token.HR)
            res.should.have.status(200);
            res.body.data.employee.should.have.property('id');
            res.body.data.employee.should.have.property('userid');
            res.body.data.employee.should.have.property('firstName');
            res.body.data.employee.should.have.property('lastName');
            res.body.data.employee.should.have.property('avatar');
            res.body.data.employee.should.have.property('address');
            res.body.data.employee.should.have.property('CMND');
            res.body.data.employee.should.have.property('BHXH');
        });
    });

    //test Manager get employee id
    describe('/GET Employee/:id', () => {
        it('Manager GET the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .set('Authorization', token.Manager)
            res.should.have.status(200);
            res.body.data.employee.should.have.property('id');
            res.body.data.employee.should.have.property('userid');
            res.body.data.employee.should.have.property('firstName');
            res.body.data.employee.should.have.property('lastName');
            res.body.data.employee.should.have.property('avatar');
            res.body.data.employee.should.have.property('address');
            res.body.data.employee.should.have.property('CMND');
            res.body.data.employee.should.have.property('BHXH');
        });
    });

    //test Employee get employee id
    describe('/GET Employee/:id', () => {
        it('Employee GET the Employee', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/employee/b4569a4c-707a-486b-9ebd-f0cf5b18b1bd')
                .set('Authorization', token.Employee)
            res.should.have.status(200);
            res.body.data.employee.should.have.property('id');
            res.body.data.employee.should.have.property('userid');
            res.body.data.employee.should.have.property('firstName');
            res.body.data.employee.should.have.property('lastName');
            res.body.data.employee.should.have.property('avatar');
            res.body.data.employee.should.have.property('address');
            res.body.data.employee.should.have.property('CMND');
            res.body.data.employee.should.have.property('BHXH');
        });
    });

    //test Amin delete employee
    describe('/DELETE/:id Employee', () => {
        it('Admin DELETE a Employee given the id', async() => {
            let id = '44ba9145-cd03-414a-81e3-6feb82570c53';
            let res = await chai.request(app)
                .delete('/api/v1/auth/employee/' + id)
                .set('Authorization', token.Admin)
            res.should.have.status(200);
        });
    });

});