// API dependencies
const routes = require('./src/routes');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan")
const path = require('path');

require("dotenv").config()

// Enabling CORs
app.use(cors());
app.use(morgan("combined"))

app.use("/static", express.static(path.join(__dirname, "input")))
app.use("/static", express.static(path.join(__dirname, "output")))

// Routing POST Requests on /compress to reqHandCompress
app.post('/compress', routes.compress);

// Routing All Other Requests to 404 Route
app.use('/', routes.fourofour);

// Listenting on Port 3001
const server = app.listen(process.env.PORT);

// Setting Server Timeout 30 secs
server.setTimeout(30 * 1000);
server.keepAliveTimeout = 30 * 1000;
server.headersTimeout = 31 * 1000;