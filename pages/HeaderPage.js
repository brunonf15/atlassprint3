
class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  async openMenu() {
    const menuPanel = await this.page.locator('nav[role="navigation"]');
    await menuPanel.click();
  }

  async assertMenuIsVisible() {
    const menuButton = await this.page.locator('#GEN_BTN_HOME_MENU div');
    await menuButton.click();
  
  }
  async acessarAtualizarPerfil() {
    const btnAtualizarPerfil = await this.page.getByRole('button', { name: 'Atualizar perfil' });
    await btnAtualizarPerfil.click();
  }
}

module.exports = HeaderPage ;