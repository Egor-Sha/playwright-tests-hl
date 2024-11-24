import { test, expect } from '@playwright/test';
import CookiesPopupPage from '../pom/cookies.popup.js';

test('Accept Cookies test', async ({ page }) => {

  const cookiesPopupPage = new CookiesPopupPage(page);

  await cookiesPopupPage.navigateTo('/');
  expect(await cookiesPopupPage.isPopupButtonVisible()).toBeTruthy();

  await cookiesPopupPage.acceptCookies();
  await page.waitForLoadState('networkidle');
  
  expect(await cookiesPopupPage.isMessageVisible()).toBeTruthy();

});