const jwt = require('jsonwebtoken');
const { user } = require('../models/user')
require('dotenv').config();

async function verifyToken(req, res, next) {
    //verifyToken
    let Bearer = req.header('Authorization');
    // console.log(token);
    if (!Bearer) return res.status(401).json({ message: 'token req authentication' });
    let token = Bearer.split(' ')[1];
    let result = await jwt.verify(token, process.env.APP_SECRET || 'fjdhfjhdsf');
    console.log(result);
    const User = await user.findOne({ where: { username: result.username } });
    if (!User) return res.status(401).json({ message: 'No found user' });
    req.Userid = User.id;
    next();
}

module.exports = { verifyToken };