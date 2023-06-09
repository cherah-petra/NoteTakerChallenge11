const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")