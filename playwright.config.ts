import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config({ quiet: true });

if (!process.env.API_USERNAME || !process.env.API_PASSWORD) {
  throw new Error(
    'Missing API_USERNAME or API_PASSWORD. Check your .env file.'
  );
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list']],

  use: {
    baseURL: 'https://adventurers-guild-api.vercel.app',
    extraHTTPHeaders: {
      Accept: 'application/json',
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'backend-testing',
    },
  ],
});