let formReq = {
    postForm: {
        example: {
            "title": "FORM DANH GIA",
            "type": 1,
            "userid": "2b99f920-2ef6-48f2-94ac-73a49c9a60ad",
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
        }
    },
    putForm: {
        example: {
            "content": "hello",
            "status": "submitted",
            "formDetail": {
                "content": "hello"
            }
        }
    },
    managerPutForm: {
        example: {
            "complete": 1,
            "reject": 0,
            "formDetail": {
                "managerComment": "done"
            }
        }
    },
    HRPutForm: {
        example: {
            "status": "close",
            "formDetail": {
                "managerComment": ""
            }
        }
    },
    register: {
        example: {
            "username": "Employee1",
            "password": "Employee1",
            "age": 23,
            "email": "Employee1@gmail.com",
            "phone": "098765",
            "address": "Ha Noi"
        }
    },
    login: {
        example: {
            "username": "Admin",
            "password": "Admin"
        }
    },
    RolePermissions: {
        example: {
            "roleid": "5",
            "apiid": "2",
            "isDeleted": "0",
            "createBy": "Admin",
            "updateaBy": "Admin"
        }
    },
}

module.exports = { formReq };