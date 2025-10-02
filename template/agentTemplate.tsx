import { Stagehand } from "@browserbasehq/stagehand";
import * as dotenv from 'dotenv';

dotenv.config({ path: "../.env" });

async function run() {
    const stagehand = new Stagehand({
        env: "LOCAL",
    });
    await stagehand.init();
    const agent = stagehand.agent({
    instructions: "You are a helpful assistant that can use a web browser.",
    });
    await agent.execute("find me documentation about agent mode at Browserbase's stagehand")
}

run();