const { login } = require('./login');

test('Login function works', async () => {
  const result = await login('testUser', 'testPassword');
  expect(result.success).toBe(true);
  // Add more assertions based on the expected behavior
});