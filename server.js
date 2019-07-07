const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/login', (req, res) => {
  res.redirect(
    `https://secure.meetup.com/oauth2/authorize?client_id=${
      process.env.CLIENT_ID
    }&response_type=token&redirect_uri=${process.env.REDIRECT_URI}`
  );
});

app.get('/login/auth_redirect', async (req, res) => {
  const access_token = req.body.access_token;
  const groups = await fetch('https://api.meetup.com/self/groups', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  }).then(response => response.json());
  // may not need the whole array client-side... possibly just names and ids of groups?
  res.send(groups);
});

app.listen(process.env.PORT || 3001, () => `Server running on port ${port}`);
