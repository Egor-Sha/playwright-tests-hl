class CafePage {
  constructor(page) {
    this.page = page;
    this.sortDropdownButton = page.locator('#layer-product-list > div:nth-child(1) > div.toolbar-sorter.sorter > div > ul > li.init > img');
    this.priceAscSortOption = page.locator('li').filter({ hasText: 'Price Low to High' });
    this.nameDescSortOption = page.locator('li').filter({ hasText: 'Product Z-A' });
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async clickElement(locator) {
    await locator.click(); 
  }

  async isVisible(locator) {
    return await locator.isVisible(); 
  }

  async clickSortDropdownButton() {
    await this.clickElement(this.sortDropdownButton);
  }

  async clickPriceAscOption() {
    await this.clickElement(this.priceAscSortOption);
  }

  async clickNameDescOption() {
    await this.clickElement(this.nameDescSortOption);
  }
}
  
export default CafePage;