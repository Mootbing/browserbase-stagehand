// Generated script for workflow 7d92adbe-7975-4151-919e-af5d0a25e16b
// Generated at 2025-10-01T17:35:46.359Z

import { Stagehand, type ConstructorParams } from '@browserbasehq/stagehand';
import { z } from 'zod';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: "../.env" });

// Stagehand configuration
const stagehandConfig = (): ConstructorParams => {
  return {
    env: 'LOCAL',
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

    const variables = {
      input1: 'Philadelphia',
    };
    
    // Step 1: Navigate to URL
    console.log('Navigating to: https://www.amtrak.com/');
    await page.goto('https://www.amtrak.com/'); 
    
    // Step 2: Perform action
    console.log(`Performing action: click the From input field`);
    await page.act(`click the From input field`); 
    
    // Step 3: Perform action
    console.log(`Performing action: click the Allow All button`);
    await page.act(`click the Allow All button`); 
    
    // Step 4: Perform action
    console.log(`Performing action: click the From input field`);
    await page.act(`click the From input field`); 
    
    // Step 5: Perform action
    console.log(
      `Performing action: type ${variables.input1} into the From input field`,
    );
    await page.act(`type ${variables.input1} into the From input field`); 
    
    // Step 6: Perform action
    console.log(
      `Performing action: click the Philadelphia, PA - William H Gray III 30th St. Sta. (PHL) option`,
    );
    await page.act(
      `click the Philadelphia, PA - William H Gray III 30th St. Sta. (PHL) option`,
    ); 
    
    // Step 7: Perform action
    console.log(`Performing action: click the To input field`);
    await page.act(`click the To input field`); 
    
    // Step 8: Perform action
    console.log(
      `Performing action: click the New York, NY - Moynihan Train Hall (NYP) option`,
    );
    await page.act(`click the New York, NY - Moynihan Train Hall (NYP) option`); 
    
    // Step 9: Perform action
    console.log(`Performing action: click the Depart Date field`);
    await page.act(`click the Depart Date field`); 
    
    // Step 10: Perform action
    console.log(`Performing action: click the 1 date in October 2025`);
    await page.act(`click the 1 date in October 2025`); 
    
    // Step 11: Perform action
    console.log(`Performing action: click the FIND TRAINS button`);
    await page.act(`click the FIND TRAINS button`); 
    
    // Step 12: Extract data
    console.log(
      `Extracting: extract all available train options with their departure times, arrival times, train names/numbers, and coach prices`,
    );
    const extractedData12 = await page.extract({
      instruction: `extract all available train options with their departure times, arrival times, train names/numbers, and coach prices`,
      schema: z.object({
        trains: z.array(
          z.object({
            trainName: z.string().optional(),
            trainNumber: z.string().optional(),
            departureTime: z.string().optional(),
            arrivalTime: z.string().optional(),
            duration: z.string().optional(),
            coachPrice: z.string().optional(),
            businessPrice: z.string().optional(),
          }),
        ),
      }),
    });
    console.log('Extracted:', extractedData12); 

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