const { app } = require('.');

const hostname = "localhost";
const port = 4000;

app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});