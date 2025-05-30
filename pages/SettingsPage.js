
class SettingsPage {
  constructor(page) {
    this.page = page;
  }
  async botaoConfiguração(){
    const configBotao = await this.page.locator('#GEN_BTN_ACCOUNT_PROFILE_SETTINGS');
    await configBotao.click();
  }

 async botaoLinguagem(lingua = 'Espanhol') {
  const dropdown = this.page.locator('#GEN_DROPDOWN_ACCOUNT_LANGUAGE');
  await dropdown.waitFor({ state: 'visible' }); // Espera o dropdown estar visível
  await dropdown.selectOption({ label: lingua }); // Seleciona a opção pela label
 }

 async botaoSalvar(){
    const salvar = this.page.getByRole('button', { name: 'Salvar' });
    await salvar.click();
 }

}

module.exports = SettingsPage ;