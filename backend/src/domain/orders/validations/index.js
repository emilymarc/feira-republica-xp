import { create } from "./order/create";
import { getOne } from "./order/getOne";
import { destroy}  from "./order/destroy";
import { update } from "./order/update";
import { getUserOrder } from "./order/getUserOrder";


const orderValidation = {
  create,
  getOne,
  destroy,
  update,
  getUserOrder,
};


module.exports = orderValidation;

