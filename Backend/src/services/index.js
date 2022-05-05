const things = require('./things/things.service.js');
const owners = require('./owners/owners.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(things);
  app.configure(owners);
};
