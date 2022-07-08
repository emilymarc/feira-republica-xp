const express = require("express");
const cors = require("cors");
const db = require("./infrastructure/database");
const routes = require('./routes');
const handleMiddleware = require('./middlewares/handleMiddleware');
const upload = require("./config/upload");



const app = express();

db.hasConnection();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true}))

app.use(upload.any())

app.use(routes)

app.use(handleMiddleware);

module.exports = {
	app
}
