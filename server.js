const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const api = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

api(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}...`));
