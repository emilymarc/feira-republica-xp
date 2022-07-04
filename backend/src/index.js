const express = require("express");
const cors = require("cors");
const db = require("./infrastructure/database");
const routes = require('./routes')
const handleMiddleware = require('./middlewares/handleMiddleware');
const app = express();

app.use(handleMiddleware);

db.hasConnection();

app.use(cors());

app.use(express.json());

app.use(routes)



module.exports = {
	app
}
