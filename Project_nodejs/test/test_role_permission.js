process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
let token = require('./token.json');

chai.use(chaiHttp);
//Our parent block
describe('ROLE_PERMISSION', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    //test get all reole_permission
    describe('/GET Role_Permission', () => {
        it('Admin GET all the Role_Permission', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/role_permission')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Permission.should.be.a('array');
        });
    });

    //test create role_permission
    describe('/POST Role_Permission', () => {
        it('Admin create the Role_Permission', async() => {
            let Role_Permission = {
                "roleid": "5",
                "apiid": "1",
                "isDeleted": 0,
                "createBy": "Admin",
                "updateaBy": "Admin"
            }
            let res = await chai.request(app)
                .post('/api/v1/auth/role_permission')
                .set('Authorization', token.Admin)
                .send(Role_Permission)
            res.should.have.status(200);
        });
    });

    //test update role_permission
    describe('/PUT Form', () => {
        it('Admin update the Form', async() => {
            let Role_Permission = {
                "roleid": "5",
                "apiid": "1",
                "isDeleted": 1,
            }
            let res = await chai.request(app)
                .put('/api/v1/auth/employee/d1a8512f-ca12-4037-8b4b-d0163467a75e')
                .set('Authorization', token.Admin)
                .send(Role_Permission)
            res.should.have.status(200);
        });
    });

    //test delete role_permission > id la ao lay id that se xoa truc tiep db
    describe('/DELETE/:id Role_Permission', () => {
        it('Admin DELETE a Role_Permission given the id', async() => {
            let id = '2';
            let res = await chai.request(app)
                .delete('/api/v1/auth/employee/' + id)
                .set('Authorization', token.Admin)
            res.should.have.status(200);

        });
    });


});