const  Orders  = require('./orders');
const  ItemOrder  = require('./item_order');

Orders.hasMany(ItemOrder, {
    foreignKey: 'id_order_item_order'
  });
ItemOrder.belongsTo(Orders, {
    foreignKey: 'id_order_item_order'
  });

module.exports = {
    Orders,
    ItemOrder
};
