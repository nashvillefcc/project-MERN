const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

const app = express();

app.get('/login', (req, res) => {
  res.json({
    status: 301,
    redirect: `https://secure.meetup.com/oauth2/authorize?client_id=${
      process.env.CLIENT_ID
    }&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`,
  });
});

app.get('/login/auth_redirect', async (req, res) => {
  const auth_code = req.query.code;
  const groupArray = await fetch(
    `https://secure.meetup.com/oauth2/access?client_id=${
      process.env.CLIENT_ID
    }&client_secret=${
      process.env.CLIENT_SECRET
    }&grant_type=authorization_code&redirect_uri=${
      process.env.REDIRECT_URI
    }&code=${auth_code}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
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
  res.send(
    groupArray.map(m => {
      return {
        name: m.name,
        id: m.id,
      };
    })
  );
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}...`));
