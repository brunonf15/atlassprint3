const { th } = require("@faker-js/faker");

// pages/SettingsPage.js
class SettingsPage {
  /**
   * @param {import('@playwright/test').Page} page - Instância da página Playwright.
   * @param {Function} expect - Função de asserção do Playwright.
   */
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;

    this.configButton = this.page.getByText(/Configurações|Ajustes/i);
    this.languageDropdown = this.page.locator("#GEN_DROPDOWN_ACCOUNT_LANGUAGE");
    this.saveButton = this.page.getByRole("button", {
      name: /Salvar|Ahorrar/i,
    });
  }

  /**
   * Clica no botão de configurações para navegar até a página de ajustes.
   * @param {string} [language='Português'] - Idioma do botão (opcional).
   */
  async botaoConfiguração(language = "Português") {
    let buttonTextForLog =
      language === "Espanhol" ? "Ajustes" : "Configurações";
    console.log(`Clicando no botão "${buttonTextForLog}"...`);

    await this.page.waitForLoadState("domcontentloaded");

    await this.expect(this.configButton).toBeVisible({ timeout: 10000 });
    await this.expect(this.configButton).toBeEnabled({ timeout: 10000 });

    await this.configButton.click();
    await this.page.waitForLoadState("domcontentloaded");
    console.log("Navegou para a página de configurações.");
  }

  /**
   * Seleciona um idioma no dropdown de configurações pelo índice.
   * @param {number} indiceDaLingua - Índice do idioma no dropdown.
   */
  async botaoLinguagem(indiceDaLingua) {
    console.log(
      `Selecionando idioma pelo índice "${indiceDaLingua}" no dropdown.`
    );

    await this.expect(this.languageDropdown).toBeVisible({ timeout: 10000 });
    await this.expect(this.languageDropdown).toBeEnabled({ timeout: 10000 });

    await this.languageDropdown.selectOption({ index: indiceDaLingua });
    console.log(`Idioma com índice "${indiceDaLingua}" selecionado.`);
  }

  /**
   * Clica no botão "Salvar" e aguarda recarregamento da página.
   */
  async botaoSalvar() {
    console.log('Clicando no botão "Salvar" ou "Guardar"...');

    await this.expect(this.saveButton).toBeVisible({ timeout: 10000 });
    await this.expect(this.saveButton).toBeEnabled({ timeout: 10000 });

    await this.saveButton.click();
    await this.page.waitForLoadState("networkidle");
    await this.page.waitForLoadState("domcontentloaded");

    console.log("Configurações salvas e página recarregada.");
  }
}

module.exports = SettingsPage;
