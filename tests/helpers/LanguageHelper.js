/**
 * Classe auxiliar para detecção e validação de idiomas na interface.
 */
class LanguageHelper {
  /**
   * @param {import('@playwright/test').Page} page - Instância da página Playwright.
   * @param {Function} expect - Função de asserção do Playwright.
   */
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.languagesConfig = {
      Português: {
        label: "Português",
        index: 2,
        menuTexts: ["Atualizar perfil", "Sobre este aplicativo", "Sair"],
        detectionText: "Atualizar perfil",
      },
      Espanhol: {
        label: "Español",
        index: 2,
        menuTexts: [
          "Actualizar perfil",
          "Acerca de esta aplicación",
          "Cerrar sesión",
        ],
        detectionText: "Actualizar perfil",
      },
    };
  }

  /**
   * Detecta o idioma inicial da página.
   * @returns {Promise<{ initialPageLanguage: string, initialLangData: object }>}
   */
  async detectInitialLanguage() {
    let initialPageLanguage = "Desconhecido";
    let initialLangData;

    try {
      await this.expect(
        this.page.getByText(this.languagesConfig.Português.detectionText)
      ).toBeVisible({ timeout: 5000 });
      initialPageLanguage = this.languagesConfig.Português.label;
      initialLangData = this.languagesConfig.Português;
    } catch {
      try {
        await this.expect(
          this.page.getByText(this.languagesConfig.Espanhol.detectionText)
        ).toBeVisible({ timeout: 5000 });
        initialPageLanguage = this.languagesConfig.Espanhol.label;
        initialLangData = this.languagesConfig.Espanhol;
      } catch {
        throw new Error("Linguagem inicial desconhecida.");
      }
    }
    return { initialPageLanguage, initialLangData };
  }

  /**
   * Valida se todos os textos do menu estão visíveis para o idioma informado.
   * @param {object} langData - Objeto de configuração do idioma.
   */
  async validateMenuTexts(langData) {
    for (const text of langData.menuTexts) {
      await this.expect(this.page.getByText(text)).toBeVisible();
    }
  }

  /**
   * Retorna o idioma alvo para troca, baseado no idioma inicial.
   * @param {string} initialPageLanguage - Idioma inicial detectado.
   * @returns {object} Objeto de configuração do idioma alvo.
   */
  getTargetLanguage(initialPageLanguage) {
    if (initialPageLanguage === this.languagesConfig.Português.label) {
      return this.languagesConfig.Espanhol;
    } else {
      return this.languagesConfig.Português;
    }
  }
}

module.exports = LanguageHelper;