import { test, expect } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage");
const HeaderPage = require("../../pages/HeaderPage");
const ProfilePage = require("../../pages/ProfilePage");

/**
 * Fluxo de atualização de dados do perfil (feature instável, teste pulado):
 * 1. Acessa a página de login em pt_br.
 * 2. Realiza login com credenciais válidas.
 * 3. Aceita cookies e acessa o menu do usuário.
 * 4. Acessa a tela de atualização de perfil.
 * 5. Altera nível, profissão e telefone do perfil.
 */
test.skip("Atualizar dados do perfil: nível, profissão e telefone", async ({ page }) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);
  const profilePage = new ProfilePage(page, expect);

  // Login e navegação
  await loginPage.registrationLogin("hostingdazh@gmail.com", "Dazh2020$");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.menuButtonAction('click');
  await profilePage.botaoAttPerfil();

  // Atualização de dados do perfil
  await profilePage.selecionarNivelPerfil("Iniciante");
  await profilePage.selecionarProfissaoAtual("Atendente");
  await profilePage.selecionarTelefone();
});
