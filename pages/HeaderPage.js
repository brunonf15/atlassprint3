class HeaderPage {
  /**
   * @param {import('@playwright/test').Page} page - Instância da página Playwright.
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Abre o menu de navegação.
   */
  async openMenu() {
    const menuPanel = await this.page.locator('nav[role="navigation"]');
    await menuPanel.click();
  }

  /**
   * Ações no botão de menu: 'check' para verificar visibilidade, 'click' para clicar.
   * @param {'check'|'click'} action - Ação a ser executada.
   */
  async menuButtonAction(action = 'check') {
    const menuButton = await this.page.locator("#GEN_BTN_HOME_MENU div");
    if (action === 'click') {
      await menuButton.click();
    } else if (action === 'check') {
      await menuButton.waitFor({ state: "visible" });
    }
  }

  /**
   * Acessa a tela de atualização de perfil.
   */
  async acessarAtualizarPerfil() {
    const btnAtualizarPerfil = await this.page.getByRole("button", {
      name: "Atualizar perfil",
    });
    await btnAtualizarPerfil.click();
  }
}

module.exports = HeaderPage;
