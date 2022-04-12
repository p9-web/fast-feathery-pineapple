// Initializes the `things` service on path `/things`
const { Things } = require('./things.class');
const createModel = require('../../models/things.model');
const hooks = require('./things.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/things', new Things(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('things');

  service.hooks(hooks);
};
