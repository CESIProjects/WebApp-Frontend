import { test, expect } from '@playwright/test';
const { PLAYWRIGHT_CREDENTIALS } = process.env;
// const PLAYWRIGHT_CREDENTIALS='{"username":"test","password":"test1234"}'

test('Documents page', async ({ page, context }) => {
  if (!PLAYWRIGHT_CREDENTIALS) throw new Error('PLAYWRIGHT_CREDENTIALS is not defined');

  await page.goto('');

  await page.waitForLoadState();

  const { username, password } = JSON.parse(PLAYWRIGHT_CREDENTIALS);

  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Mot de passe').fill(password);
  await page.getByText('Se connecter').click();

  await expect(page.getByText('(RE) SOURCES RELATIONNELLES')).toBeVisible();

  await page.getByRole('link', { name: 'Documents' }).click();

  // await expect(page.getByRole('heading', { name: 'Page de publication' })).toBeVisible();

});