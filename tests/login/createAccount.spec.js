import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');

test(' account creation ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  // coloquei antes aqui para ele sumir o modal antes de digitar os dados se nao pode quebrar
  await loginPage.acceptAllButton();

  await loginPage.clickCreateAccountText();
  
  

  await loginPage.fillNameEmailPassword('xavier', 'V677X2H@example.com', 'Xavier2025$');
  await loginPage.selectLanguage();
  await loginPage.acceptTerms();
  await loginPage.clickCreateAccountButton();
  await page.waitForTimeout(3000);



});