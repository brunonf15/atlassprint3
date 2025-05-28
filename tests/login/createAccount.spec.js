import { test } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const { faker } = require('@faker-js/faker');

test('criação de conta', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);

  await loginPage.acceptAllButton();
  await loginPage.clickCreateAccountText();

  // Gerando dados aleatórios com domínio personalizado
  const nome = faker.person.firstName();
  const identificador = faker.string.alphanumeric(6).toLowerCase();
  const email = `${nome.toLowerCase()}.${identificador}@go2atlas`;
  const senha = faker.internet.password({ length: 12, memorable: true, pattern: /[A-Z]/ }) + '1$';

  await loginPage.fillNameEmailPassword(nome, email, senha);
  await loginPage.selectLanguage();
  await loginPage.acceptTerms();
  await loginPage.clickCreateAccountButton();
  await page.waitForTimeout(3000);
});
