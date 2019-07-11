const fetch = require('node-fetch');

module.exports = app => {
  app.get('/login', (req, res) => {
    res.json({
      status: 301,
      redirect: `https://secure.meetup.com/oauth2/authorize?client_id=${
        process.env.CLIENT_ID
      }&response_type=code&redirect_uri=${process.env.REDIRECT_URI}`
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
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        res.redirect(`http://localhost:3000/?code=${data.access_token}`);
      });
  });
};
