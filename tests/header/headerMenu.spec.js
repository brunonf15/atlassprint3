import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');

test(' open header menu ', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  const headerpage = new HeaderPage(page);

  await loginPage.registrationLogin('hostingdazh@gmail.com', 'Dazh2020$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);
  await headerpage.assertMenuIsVisible();
  await headerpage.acessarAtualizarPerfil();
 
  



});