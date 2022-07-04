const Clients = require("./client");
const Address = require("./address");

Clients.hasMany(Address, {
	foreignKey: "id_client_address"
});

Address.belongsTo(Clients, {
	foreignKey: "id_client_address"
});

module.exports = {
	Clients,
	Address
};
