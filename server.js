const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client_app_address = 'https://localhost:3000'; // for now...

app.get('/login', (req, res) => {
  res.redirect(
    `https://secure.meetup.com/oauth2/authorize?client_id=${
      process.env.CLIENT_ID
    }&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`
  );
});

app.get('/login/auth_redirect', async (req, res) => {
  const auth_code = req.body.code;
  const groupArray = await fetch('https://secure.meetup.com/oauth2/access', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      client_id: process.env.CLIENT_ID,
      grand_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI,
      code: auth_code,
    },
  })
    .then(response => response.json())
    .then(async data => {
      return await fetch('https://api.meetup.com/self/groups', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + data.access_token,
        },
      })
        .then(response => response.json())
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  // may not need the whole object for each group in the array on the client-side... possibly just names and ids of groups?
  res.send(groupArray).redirect(client_app_address);
});

app.listen(process.env.PORT || 3001, () => `Server running on port ${port}`);
