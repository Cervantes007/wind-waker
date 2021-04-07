import { axios } from './client';

test('test getCats', async () => {
  const response = await axios.request({ method: 'POST', url: '/getCats' });
  expect(response.status).toBe(200);
});

test('test getCat', async () => {
  const response = await axios.request({ method: 'POST', url: '/getCat' });
  expect(response.status).toBe(200);
});
