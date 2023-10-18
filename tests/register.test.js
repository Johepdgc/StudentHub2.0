const { registerUser } = require('./register');

test('Register function works', async () => {
  const result = await registerUser('testUser', 'testPassword');
  expect(result.success).toBe(true);
  // Add more assertions based on the expected behavior
});