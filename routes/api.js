const auth = require('./auth');
const fetch = require('node-fetch');

module.exports = app => {
  auth(app);
  app.get('/:code', async (req, res) => {
    if (req.params.code) {
      const groupArray = await fetch('https://api.meetup.com/self/groups', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + req.params.code
        }
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      res.send(
        groupArray.map(m => {
          return {
            name: m.name,
            id: m.id
          };
        })
      );
    }
  });
};
