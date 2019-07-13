const auth = require('./auth');
const fetch = require('node-fetch');

module.exports = app => {
  auth(app);
  app.get('/:code', async (req, res) => {
    if (req.params.code) {
      const eventArray = await fetch(
        'https://api.meetup.com/self/events?page=5&fields=attendance_sample',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + req.params.code
          }
        }
      )
        .then(response => response.json())
        .catch(err => console.log(err));
      res.send(eventArray);
    }
  });
};
