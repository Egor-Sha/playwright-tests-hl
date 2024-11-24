import CafePage from './cafe.page.js';

class CookiePopupPage extends CafePage {
  constructor(page) {
    super(page);
    this.acceptCookiesButton = page.getByRole('button', { name: 'ACCEPT COOKIES' }); 
    this.successMessage = page.locator('div').filter({hasText: 'You saved your cookie settings!'}).nth(1); 
  }

  async acceptCookies() {
    await this.clickElement(this.acceptCookiesButton);
  }

  async isPopupButtonVisible() {
    return await this.isVisible(this.acceptCookiesButton);
  }

  async isMessageVisible() {
    return await this.isVisible(this.successMessage);
  }
}

export default CookiePopupPage;