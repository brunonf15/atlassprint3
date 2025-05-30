
class ProfilePage {
  constructor(page) {
    this.page = page;
  }
  async botaoAttPerfil(){
    const botaoPerfil = await this.page.getByRole('button', { name: 'Atualizar perfil' });
    await botaoPerfil.click();
  }

  async selecionarNivelPerfil(nivel = 'Iniciante') {
  const dropdownNivel = await this.page.locator('#GEN_DROPDOWN_ACCOUNT_PROFILE_LEVEL')
  await dropdownNivel.selectOption({ label: nivel });
 }

  async selecionarProfissaoAtual(profissao) {
   const profissaoAtual = this.page.locator('#SUR_INP_SEARCH_JOB input.tt-input');
   await profissaoAtual.fill(profissao);
   await profissaoAtual.press('Enter');
}
  
  async selecionarTelefone() {
   const telefone = this.page.locator('input[name="phone"]');
   await telefone.fill('11999999999');
 }
}

module.exports = ProfilePage ;