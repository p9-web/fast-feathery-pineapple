const app = require('../../src/app');

describe('\'owners\' service', () => {
  it('registered the service', () => {
    const service = app.service('owners');
    expect(service).toBeTruthy();
  });
});
