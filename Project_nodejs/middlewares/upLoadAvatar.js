//multer
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const fileupload = path.resolve(path.join(__dirname, '../uploads'));

if (!fs.existsSync(fileupload)) {
    fs.mkdirSync(fileupload, { recursive: true });
};
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        // cb(null, fileupload);
        cb(null, path.join(__dirname, '../uploads/'));
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

module.exports = { storage };