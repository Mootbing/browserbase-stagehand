import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";
import { z } from 'zod';

async function main() {
  const stagehand = new Stagehand({
    env: "LOCAL",
    verbose: 2
  });

  await stagehand.init();

  const page = stagehand.page;

  await page.goto("https://aigrant.com/");

  const extractionResult = await page.extract({
    instruction: `Extract the names, URL links, and descriptions of the companies in batch 3 under the subsection AI Grant Companies`,
    schema: z.object({
        companies: z.array(
          z.object({
            companyName: z.string(),
            description: z.string(),
            link: z.string().url(),
          }),
        ),
      }),
  })

  console.log(extractionResult);

  // await stagehand.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

// James Coen X-6393 | June 1 - June 30 | click view recept | get price -> get destination and departure cities -> get cities

  //1st subproblem
  // await page.act("Input into the textfield labeled 'Traveler first name' the text 'James'");
  // await page.act("Input into the textfield labeled 'Traveler last name' the text 'Coen'");
  // await page.act("Input into the textfield labeled 'Last 4 digits of card' the text '6393'");

  // //2nd subproblem
  // await page.act("Input into the first part of the text field under the div with the label 'Travel date range' the text 'June 1'");
  // await page.act("Input into the second part of the text field under the div with the label 'Travel date range' the text 'June 30'");

  // await page.act("Click on the textbox that is labeled 'Last 4 digits of card'");

  // await page.act("Click the button labeled 'Search'");