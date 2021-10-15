process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

chai.use(chaiHttp);
//Our parent block
describe('ROLE_PERMISSION', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    //test get all reole_permission
    describe('/GET Role_Permission', () => {
        it('it should GET all the Role_Permission', (done) => {
            chai.request(app)
                .get('/api/v1/auth/role_permission')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test create role_permission
    describe('/POST Role_Permission', () => {
        it('it should create the Role_Permission', (done) => {
            let Role_Permission = {
                "roleid": "FORM THU VIEC",
                "appiid": 0,
                "createAt": Date.now(),
                "updateAt": Date.now(),
            }
            chai.request(app)
                .post('/api/v1/auth/role_permission/2')
                .send(Role_Permission)
                .end((err, res) => {
                    res.should.have.status(500);
                });
            done();
        });
    });

    //test update role_permission
    describe('/PUT Form', () => {
        it('it should update the Form', (done) => {
            let Role_Permission = {
                "roleid": "FORM THU VIEC",
                "appiid": 0,
                "createAt": Date.now(),
                "updateAt": Date.now(),
            }
            chai.request(app)
                .put('/api/v1/auth/employye/2')
                .send(Role_Permission)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    //test delete role_permission
    describe('/DELETE/:id Role_Permission', () => {
        it('it should DELETE a Role_Permission given the id', (done) => {
            let id = '2';
            chai.request(app)
                .delete('/api/v1/auth/employee/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

});