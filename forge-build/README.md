# Forge

> An autonomous AI coding agent that understands, modifies, and verifies your codebase.

Forge is a terminal-first AI coding agent designed to work directly with real software repositories.

Instead of only answering questions about your code, Forge is designed to understand a task, inspect the repository, plan changes, use development tools, modify files, run commands and tests, and iterate based on the results.

## Features

- Codebase-aware AI assistance
- Interactive CLI
- Repository exploration
- File reading and editing
- Shell command execution
- Code search
- LLM-powered reasoning
- Tool calling
- Test execution and verification
- Git-aware workflows
- Persistent agent context
- Extensible tool architecture

## Architecture

```text
                 ┌──────────────┐
                 │     User     │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │  Forge CLI   │
                 └──────┬───────┘
                        │
                        ▼
                 ┌──────────────┐
                 │  Agent Loop  │
                 └──────┬───────┘
                        │
            ┌───────────┼───────────┐
            ▼           ▼           ▼
        Codebase      Tools        LLM
       Intelligence              Provider
            │           │
            ▼           ▼
        Repository    File / Shell
        Context       / Git / Tests
            │           │
            └─────┬─────┘
                  ▼
             Observation
                  │
                  ▼
             Agent Loop
