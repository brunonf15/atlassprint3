// pages/ProfilePage.js
class ProfilePage {
    /**
     * @param {import('@playwright/test').Page} page - Instância da página Playwright.
     * @param {Function} expect - Função de asserção do Playwright.
     */
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    /**
     * Clica no botão de atualizar perfil conforme o idioma.
     * @param {string} [language='Português'] - Idioma do botão.
     */
    async botaoAttPerfil(language = 'Português') {
        let buttonName;
        if (language === 'Español') {
            buttonName = 'Actualizar perfil';
        } else {
            buttonName = 'Atualizar perfil';
        }

        console.log(`Clicando no botão de perfil: "${buttonName}" (idioma: ${language})`);
        const botaoPerfil = this.page.getByRole('button', { name: buttonName });

        await this.expect(botaoPerfil).toBeVisible({ timeout: 10000 });
        await this.expect(botaoPerfil).toBeEnabled({ timeout: 10000 });

        await botaoPerfil.click();
        console.log(`Botão "${buttonName}" clicado com sucesso.`);
    }

    /**
     * Seleciona o nível do perfil no dropdown.
     * @param {string} [nivel='Iniciante'] - Nível do perfil.
     */
    async selecionarNivelPerfil(nivel = 'Iniciante') {
        const dropdownNivel = await this.page.locator('#GEN_DROPDOWN_ACCOUNT_PROFILE_LEVEL');
        await dropdownNivel.selectOption({ label: nivel });
    }

    /**
     * Seleciona a profissão atual preenchendo o campo.
     * @param {string} profissao - Profissão a ser preenchida.
     */
    async selecionarProfissaoAtual(profissao) {
        const profissaoAtual = this.page.locator('#SUR_INP_SEARCH_JOB input.tt-input');
        await profissaoAtual.fill(profissao);
        await profissaoAtual.press('Enter');
    }

    /**
     * Preenche o campo de telefone com valor fixo.
     */
    async selecionarTelefone() {
        const telefone = this.page.locator('input[name="phone"]');
        await telefone.fill('11999999999');
    }
}
module.exports = ProfilePage;