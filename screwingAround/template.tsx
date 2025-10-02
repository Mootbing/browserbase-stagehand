import { Stagehand, type ConstructorParams } from '@browserbasehq/stagehand';
import { z } from 'zod';
import * as dotenv from 'dotenv';

dotenv.config({ path: "../.env" });

const stagehandConfig = (): ConstructorParams => {
  return {
    // env: 'BROWSERBASE', // Options: 'BROWSERBASE' or 'LOCAL'
    env: 'LOCAL',
  };
};

// async function DoWork(page: Stagehand["page"]) {
//     await page.goto("https://youtube.com");
//     await page.act("click on search box");
//     await page.act("type 'skibidi toilet'");
//     await page.act("press Enter");
//     const data = await page.extract({
//       instruction: `title of the first 5 videos`,
//       schema: z.object({
//         titles: z.array(z.string()).length(5),
//       }),
//     });

//     console.log(data);
// }

async function DoWork(page: Stagehand["page"]) {
    
}

async function runWorkflow() {
  let stagehand: Stagehand | null = null;

  try {
    console.log('Initializing Stagehand...');
    stagehand = new Stagehand(stagehandConfig());
    await stagehand.init();
    console.log('Stagehand initialized successfully.');

    const page = stagehand.page;
    if (!page) {
      throw new Error('Failed to get page instance from Stagehand');
    }

    await DoWork(page);

    return { success: true };
  } catch (error) {
    console.error('Workflow failed:', error);
    return { success: false, error };
  } finally {
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

runWorkflow().then((result) => {
  console.log('Execution result:', result);
  process.exit(result.success ? 0 : 1);
});

export default runWorkflow;