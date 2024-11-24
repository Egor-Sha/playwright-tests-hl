import { test, expect } from '@playwright/test';
import CafePage from '../pom/cafe.page.js';
import CookiesPopupPage from '../pom/cookies.popup.js';

test.describe('Product Sorting Tests', () => {
  
  test.beforeEach(async ({ page }) => {

    const cookiePopupPage = new CookiesPopupPage(page);
    await cookiePopupPage.navigateTo('/');
    expect(await cookiePopupPage.isPopupButtonVisible()).toBeTruthy();
    
    await cookiePopupPage.acceptCookies();
    await page.waitForLoadState('networkidle');

  });
  
  test('Sort products by price in ascending order', async ({ page }) => {

    const cafePage = new CafePage(page);
    await cafePage.navigateTo('/cafe');

    await cafePage.clickSortDropdownButton();
    await cafePage.clickPriceAscOption();

    const productsPrices = await page.$$eval('.product-price', (elements) =>
      elements.map((element) => parseFloat(element.textContent()))  
    );
    const sortedProductsPrices = [...productsPrices].sort((a, b) => a - b); 

    expect(productsPrices).toEqual(sortedProductsPrices);
    await page.waitForLoadState('networkidle');

  });  

  test('Sort products by name in descending order', async ({ page }) => {

    const cafePage = new CafePage(page);
    await cafePage.navigateTo('/cafe');

    await cafePage.clickSortDropdownButton();
    await cafePage.clickNameDescOption();                                    
    await page.waitForLoadState('networkidle');

    const productsNames = await page.$$eval('.product-item-link', (elements) =>   
      elements.map((element) => element.textContent.trim())
    );
    const sortedProductsNames = [...productsNames].sort((a, b) => b.localeCompare(a));          

    expect(productsNames).toEqual(sortedProductsNames);
    await page.waitForLoadState('networkidle');

  }); 

});