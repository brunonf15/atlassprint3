 import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');

test(' Invalid Login ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);

  await loginPage.registrationLogin('xavier123@gmail.com', 'Xavier2025$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);
 
  



});