// Initializes the `owners` service on path `/owners`
const { Owners } = require('./owners.class');
const createModel = require('../../models/owners.model');
const hooks = require('./owners.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/owners', new Owners(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('owners');

  service.hooks(hooks);
};
