process.env.TEST = true;
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server');

chai.use(chaiHttp);
//Our parent block
describe('FORM', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    // test get all form
    describe('/GET Form', () => {
        it('it should GET all the Form', (done) => {
            chai.request(app)
                .get('/api/v1/auth/form/AllForm')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test get one form
    describe('/GET Form/:id', () => {
        it('it should GET the Form', (done) => {
            chai.request(app)
                .get('/api/v1/auth/form/44ee1926-2ef3-4448-b978-04c0d6e3035d')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id');
                    res.body.should.have.property('userid');
                    res.body.should.have.property('content');
                    res.body.should.have.property('status');
                    res.body.should.have.property('dueDate');
                    res.body.should.have.property('isDeleted');
                    res.body.should.have.property('createBy');
                    res.body.should.have.property('createAt');
                    res.body.should.have.property('updateAt');
                    res.body.should.have.property('updateaBy');
                    res.body.should.have.property('complete');
                    res.body.should.have.property('reject');
                    res.body.should.have.property('title');
                    res.body.should.have.property('type');
                });
            done();
        });
    });

    //test uer get form
    describe('/GET Form User', () => {
        it('it should GET all the Form User', (done) => {
            chai.request(app)
                .get('/api/v1/auth/form/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test manager get form
    describe('/GET Form Manager', () => {
        it('it should GET all the Form Manager', (done) => {
            chai.request(app)
                .get('/api/v1/auth/form/manager')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test manager update form
    describe('/PUT Form Mnager', () => {
        it('it should update the Form Manager', (done) => {
            let manager = {
                "complete": 1,
                "reject": 0,
            }
            chai.request(app)
                .put('/api/v1/auth/manager/ca987d09-f3f4-41b0-b730-c709567e46da')
                .send(manager)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    //test HR get form
    describe('/GET Form HR', () => {
        it('it should GET all the Form HR', (done) => {
            chai.request(app)
                .get('/api/v1/auth/form/HR')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test HR update form
    describe('/PUT Form HR', () => {
        it('it should update the Form HR', (done) => {
            let HR = {
                "status": "close"
            }
            chai.request(app)
                .put('/api/v1/auth/HR/ca987d09-f3f4-41b0-b730-c709567e46da')
                .send(HR)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    //test view form thu viec
    describe('/GET View Form TV', () => {
        it('it should GET all View Form TV', (done) => {
            chai.request(app)
                .get('/api/v1/auth/formTV')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });

    //test view form danh gia
    describe('/GET View Form DG', () => {
        it('it should GET all View Form DG', (done) => {
            chai.request(app)
                .get('/api/v1/auth/formDG')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                });
            done();
        });
    });



    //test create form
    describe('/POST form', () => {
        it('it should create the form', (done) => {
            let form = {
                "title": "FORM THU VIEC",
                "type": 0,
                "userid": "dcf9d547-d52e-4ce2-951e-3e0eb2406645",
                "content": "new form",
                "status": "new",
                "dueDate": "2021-10-20",
                "isDeleted": 0,
                "createBy": "Admin",
                "createAt": Date.now(),
                "updateAt": Date.now(),
                "updateaBy": "Admin",
            }
            chai.request(app)
                .post('/api/v1/auth/form')
                .send(form)
                .end((err, res) => {
                    res.should.have.status(500);
                });
            done();
        });
    });


    //test update form
    describe('/PUT Form', () => {
        it('it should update the Form', (done) => {
            let form = {
                "title": "FORM THU VIEC",
                "type": 0,
                "content": "new form",
                "status": "new",
                "dueDate": "2021-10-20",
                "isDeleted": 0,
                "createBy": "Admin",
                "createAt": Date.now(),
                "updateAt": Date.now(),
                "updateaBy": "Admin",
            }
            chai.request(app)
                .put('/api/v1/auth/form/44ee1926-2ef3-4448-b978-04c0d6e3035d')
                .send(form)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });

    //test delete form
    describe('/DELETE/:id Form', () => {
        it('it should DELETE a form given the id', (done) => {
            let id = '44ee1926-2ef3-4448-b978-04c0d6e3035d';
            chai.request(app)
                .delete('/api/v1/auth/form/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                });
            done();
        });
    });


});