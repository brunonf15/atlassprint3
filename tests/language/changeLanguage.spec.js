import { test, expect } from "@playwright/test";
const LoginPage = require("../../pages/LoginPage")
const HeaderPage = require("../../pages/HeaderPage");
const ProfilePage = require("../../pages/ProfilePage");
const SettingsPage = require("../../pages/SettingsPage");
const LanguageHelper = require("../../tests/helpers/LanguageHelper");

/**
 * Fluxo de detecção e alteração de idioma do perfil:
 * 1. Acessa a página de login em pt_br.
 * 2. Realiza login e navegação inicial.
 * 3. Detecta o idioma inicial da página e valida textos do menu.
 * 4. Navega até configurações do perfil.
 * 5. Determina o idioma alvo e realiza a alteração.
 * 6. Salva as configurações e valida a mudança.
 */
test("Detectar, mudar e verificar a linguagem do perfil dinamicamente", async ({
  page,
}) => {
  await page.goto("account_login?lang=pt_br");
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);
  const profilePage = new ProfilePage(page, expect);
  const settingsPage = new SettingsPage(page, expect);
  const langHelper = new LanguageHelper(page, expect);

  // Login e navegação
  await loginPage.registrationLogin("xapexarux@mailinator.com", "Pa$$w0rd!");
  await loginPage.clickLoginButton();
  await loginPage.acceptAllButton();
  await loginPage.clickLoginButton();
  await headerPage.menuButtonAction('click');

  // 1. Detectar linguagem inicial
  const { initialPageLanguage, initialLangData } = await langHelper.detectInitialLanguage();

  // 2. Validar textos do menu
  await langHelper.validateMenuTexts(initialLangData);

  await headerPage.menuButtonAction();
  // 3. Navegar até configurações e mudar idioma
  await profilePage.botaoAttPerfil(initialPageLanguage);
  await settingsPage.botaoConfiguração(initialPageLanguage);

  // 4. Determinar idioma alvo e mudar
  const targetLangData = langHelper.getTargetLanguage(initialPageLanguage);
  await settingsPage.botaoLinguagem(targetLangData.index);
  await settingsPage.botaoSalvar();
});