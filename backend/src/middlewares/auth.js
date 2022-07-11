const expressJWT = require('express-jwt');
require('dotenv').config();

module.exports = expressJWT.expressjwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
});