import { axios } from './client';

test('getUsers', async () => {
  const response = await axios.request({ method: 'POST', url: '/getUsers' });
  expect(response.status).toBe(200);
  expect(response.data.items).toBe('getUsers');
});
