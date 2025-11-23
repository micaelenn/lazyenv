# lazyenv 

A simple tool that scans the current directory, finds all environment variable names used via `process.env.*` in your code, and automatically generates a `.env` file containing those variables.

## Requirements
- [Node.js](https://nodejs.org/en) - 22+

## How It Works

When you run the `lazyenv` command at the root of your project:

1. It scans all files in the project
2. Searches for code patterns such as _process.env.DB_HOST_ or _process.env.JWT_SECRET_
3. Extracts only the variable names (_DB_HOST, JWT_SECRET_)
4. Automatically generates a .env file with these variables

## Default Ignored Directories
The CLI automatically skips:

- node_modules
- .git
- .next
- dist
- build
- coverage
- .turbo
- out
