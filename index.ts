#!/usr/bin/env bun

import { Command } from "commander";
import { runWakeup } from "./tui/wakeup";

const program = new Command();

program
    .name("forge-build")
    .description("An autonomous coding agent that understands your codebase")
    .version("0.0.1");

program
    .command("wakeup")
    .description("Show the banner and pick CLI or telegram mode")
    .action(async () => {
        await runWakeup();
    });

await program.parseAsync(process.argv);