process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');
let should = chai.should();
let token = require('./token.json');

chai.use(chaiHttp);
//Our parent block
describe('FORM', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    // test Admin get all form
    describe('/GET Form', () => {
        it('Admin GET all the Form', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/AllForm')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');
        });
    });

    // test Drirector get all form
    describe('/GET Form', () => {
        it('Drirector GET all the Form', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/AllForm')
                .set('Authorization', token.Drirector)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');
        });
    });

    // test HR get all form
    describe('/GET Form', () => {
        it('HR GET all the Form', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/AllForm')
                .set('Authorization', token.HR)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');
        });
    });

    //test Admin get one form  [Drirector,HR ]
    describe('/GET Form/:id', () => {
        it('Admin GET the Form', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/ca987d09-f3f4-41b0-b730-c709567e46da')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.body.data.Form.should.have.property('id');
            res.body.data.Form.should.have.property('userid');
            res.body.data.Form.should.have.property('content');
            res.body.data.Form.should.have.property('status');
            res.body.data.Form.should.have.property('dueDate');
        });
    });

    //test uer get form [Admin,Drirector,HR,Manager]
    describe('/GET Form User', () => {
        it('Employee GET all the Form User', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/user')
                .set('Authorization', token.Employee)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');

        });
    });

    //test Manager get form Manager
    describe('/GET Form User', () => {
        it('MAnager GET all the Form User', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/manager')
                .set('Authorization', token.Manager)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');

        });
    });


    //test HR get form
    describe('/GET Form HR', () => {
        it('HR GET all the Form HR', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/form/HR')
                .set('Authorization', token.HR)
            res.should.have.status(200);
            res.should.be.json;
            res.body.data.Form.should.be.a('array');
        });
    });


    //test Admin view form thu viec
    describe('/GET View Form TV', () => {
        it('Admin GET all View Form TV', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/formTV')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.should.be.json;
            res.body.Form.data.should.be.a('array');
        });
    });

    //test Admin view form danh gia
    describe('/GET View Form DG', () => {
        it('Admin GET all View Form DG', async() => {
            let res = await chai.request(app)
                .get('/api/v1/auth/formDG')
                .set('Authorization', token.Admin)
            res.should.have.status(200);
            res.should.be.json;
            res.body.Form.data.should.be.a('array');
        });
    });



    //test Admin create form
    describe('/POST form', () => {
        it('Admin create the form', async() => {
            let form = {
                "title": "FORM DANH GIA",
                "type": 0,
                "userid": "70c439fd-13fe-4654-b89f-f936b766d704",
                "content": "new form",
                "status": "new",
                "dueDate": "2021-10-20",
                "isDeleted": 0,
                "createBy": "Admin",
                "updateaBy": "Admin",
                "formDetail": {
                    "content": "form",
                    "managerComment": "",
                    "isDeleted": 0,
                    "createBy": "Admin",
                    "updateaBy": "Admin"
                }
            };
            let res = await chai.request(app)
                .post('/api/v1/auth/form')
                .set('Authorization', token.Admin)
                .send(form)
            res.should.have.status(200);
        });
    });


    //test Admin update form
    describe('/PUT Form', () => {
        it('Admin update the Form', async() => {
            let form = {
                "content": "hello",
                "status": "submitted",
                "formDetail": {
                    "content": "hello"
                }
            }
            let res = await chai.request(app)
                .put('/api/v1/auth/form/user/14f8af1f-2128-4bea-ba88-d39be6f447d5')
                .set('Authorization', token.Admin)
                .send(form)
            res.should.have.status(200);
        });
    });

    //test delete form > su dung se xoa truc tiep db nen comment
    // describe('/DELETE/:id Form', () => {
    //     it('it should DELETE a form given the id', async() => {
    //         let id = '44ee1926-2ef3-4448-b978-04c0d6e3035d';
    //         let res = await chai.request(app)
    //             .delete('/api/v1/auth/form/' + id)
    //             .set('Authorization', token.Admin)
    //         res.should.have.status(200);
    //     });
    // });

});