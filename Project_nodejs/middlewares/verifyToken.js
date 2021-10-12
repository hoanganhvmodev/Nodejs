const jwt = require('jsonwebtoken');
const { user } = require('../models/user')
require('dotenv').config();

async function verifyToken(req, res, next) {
    //verifyToken
    let token = req.header('Authorization');
    // console.log(token);
    if (!user) return res.sendStastus(401);
    let result = await jwt.verify(token, process.env.APP_SECRET || 'fjdhfjhdsf');
    console.log(result);
    const User = await user.findOne({ where: { username: result.username } });
    req.Userid = User.id;
    next();
}

module.exports = { verifyToken };