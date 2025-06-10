import { test } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");
const HeaderPage = require("../../pages/HeaderPage");

/**
 * Abertura do menu do cabeçalho e acesso à atualização de perfil:
 * 1. Realiza login com credenciais válidas.
 * 2. Aguarda carregamento e abre o menu do cabeçalho.
 * 3. Acessa a opção de atualizar perfil.
 */
test("Abrir menu do cabeçalho e acessar atualização de perfil", async ({ page }) => {
  await page.goto("/account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const headerpage = new HeaderPage(page);

  // Login e navegação
  await loginPage.registrationLogin("hostingdazh@gmail.com", "Dazh2020$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(3000);

  await headerpage.menuButtonAction('click');
  await headerpage.acessarAtualizarPerfil();
});
