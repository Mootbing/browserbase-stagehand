// Generated script for workflow 4bca2a10-eecb-4033-a780-edb2e8d80261
// Generated at 2025-10-01T23:33:59.890Z

import { Stagehand, type ConstructorParams } from '@browserbasehq/stagehand';
import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: "../.env" });



// Stagehand configuration
const stagehandConfig = (): ConstructorParams => {
  return {
    env: 'BROWSERBASE', // Changed from BROWSERBASE to LOCAL to avoid session limit
  };
};

async function runWorkflow() {
  let stagehand: Stagehand | null = null;

  try {
    // Initialize Stagehand
    console.log('Initializing Stagehand...');
    stagehand = new Stagehand(stagehandConfig());
    await stagehand.init();
    console.log('Stagehand initialized successfully.');

    // Get the page instance
    const page = stagehand.page;
    if (!page) {
      throw new Error('Failed to get page instance from Stagehand');
    }

    
    // Step 1: Navigate to URL
    console.log('Navigating to: https://www.nasdaq.com/');
    await page.goto('https://www.nasdaq.com/'); 
    
    // Step 2: Perform action
    console.log(`Performing action: click the Market Activity menu item`);
    await page.act(`click the Market Activity menu item`); 

    console.log('Workflow completed successfully');
    return { success: true };
  } catch (error) {
    console.error('Workflow failed:', error);
    return { success: false, error };
  } finally {
    // Clean up
    if (stagehand) {
      console.log('Closing Stagehand connection.');
      try {
        await stagehand.close();
      } catch (err) {
        console.error('Error closing Stagehand:', err);
      }
    }
  }
}

// Single execution
runWorkflow().then((result) => {
  console.log('Execution result:', result);
  process.exit(result.success ? 0 : 1);
});

export default runWorkflow;