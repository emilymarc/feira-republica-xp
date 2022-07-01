const { createExhibitorsValidation } = require("./exhibitors/create");
const { getOneExhibitorsValidation } = require("./exhibitors/getOne");
const { destroyExhibitorsValidation } = require("./exhibitors/destroy");
const { updateExhibitorsValidation } = require("./exhibitors/update");


module.exports = {
  createExhibitorsValidation,
  getOneExhibitorsValidation,
  destroyExhibitorsValidation,
  updateExhibitorsValidation,
};




