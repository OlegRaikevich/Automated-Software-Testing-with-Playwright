import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  process.env.USER_LOGIN = process.env.USER_LOGIN || '';
  process.env.USER_PASSWORD = process.env.USER_PASSWORD || '';
}

export default globalSetup;
