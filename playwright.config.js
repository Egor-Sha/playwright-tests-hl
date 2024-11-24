import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 1,
  testDir: './tests', 
  use: {
    baseURL: 'https://highlifeshop.com/speedbird-cafe', 
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
  },
});