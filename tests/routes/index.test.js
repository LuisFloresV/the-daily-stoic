const request = require('supertest');
const fs = require('fs/promises');
const app = require('../../app');

jest.mock('fs/promises');

describe('Get reflection test', () => {
  it('should get a random reflection', async () => {
    fs.readFile.mockResolvedValue(JSON.stringify({ reflections: ['Sample reflection'] }));

    const res = await request(app)
      .get('/api/reflection')
      .expect(200);
    expect(res.body).toStrictEqual({ reflection: 'Sample reflection' });
  });
});
