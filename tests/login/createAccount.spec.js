import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');

test(' account creation ', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);

  await loginPage.clickCreateAccountText();
  
  await loginPage.acceptAllButton();
  

  await loginPage.fillNameEmailPassword('xavier', 'V677X2H@example.com', 'Xavier2025$');
  await loginPage.selectLanguage();
  await loginPage.acceptTerms();
  await loginPage.clickCreateAccountButton();
  await page.waitForTimeout(3000);



});