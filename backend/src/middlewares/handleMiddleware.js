const { ValidationError } = require("express-validation");
const { UnauthorizedError } = require("express-jwt");

module.exports = (error, req, res, next) => {
  if(error instanceof ValidationError){
      return res.status(error.statusCode).json(error);
  }

  if (error.name === "UnauthorizedError"){
      return res.status(error.status).json(error);
  }
  // console.log(UnauthorizedError);
  return res.status(500).json(error);
};


