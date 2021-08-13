import { request } from './client';

test('getUsers', async () => {
  const response = await request('getUsers');
  expect(response.status).toBe(200);
  expect(response.data.items).toBe('getUsers');
});
