 import { test  } from '@playwright/test';
const LoginPage = require('../../pages/LoginPage');
const HeaderPage = require('../../pages/HeaderPage');
const ProfilePage = require('../../pages/ProfilePage');
const SettingsPage = require('../../pages/SettingsPage');

test(' Alterar dados do perfil ', async ({ page }) => {
  await page.goto('/account_login?lang=pt_br');
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);
  const profilePage = new ProfilePage(page);
  const settingPage = new SettingsPage(page);

  await loginPage.registrationLogin('hostingdazh@gmail.com', 'Dazh2020$');
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.assertMenuIsVisible();

  await profilePage.botaoAttPerfil();
  

  await settingPage.botaoConfiguração();
  await settingPage.botaoLinguagem('Espanhol');
  await settingPage.botaoSalvar();
  await page.waitForTimeout(3000);



  
 
  



});