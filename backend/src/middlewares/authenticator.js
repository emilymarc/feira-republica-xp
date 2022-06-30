const { expressjwt } = require("express-jwt");
const secret = require("../domain/config/secret");

module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"]
});