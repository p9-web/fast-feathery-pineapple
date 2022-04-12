const app = require('../../src/app');

describe('\'things\' service', () => {
  it('registered the service', () => {
    const service = app.service('things');
    expect(service).toBeTruthy();
  });
});
