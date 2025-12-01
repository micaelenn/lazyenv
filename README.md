# Lazyenv

Automatically generate a `.env` file with all variable names found in your project.

[![npm version](https://img.shields.io/npm/v/@micaelen/lazyenv.svg)](https://www.npmjs.com/package/@micaelen/lazyenv)
[![GitHub repo](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/micaelenn/lazyenv)

## Overview

**Lazyenv** is a utility that scans your project for environment variables and auto-generates a `.env` file with those variable names. This helps you quickly scaffold env files for development, CI, or production without manually hunting through your codebase.

## Features

- Scans source files to find all environment variable references.
- Generates a `.env` file listing all detected variable names.
- Streamlines onboarding and environment setup for your project.
- Simple CLI and API.

## Installation

Install via npm:

```bash
npm install -g @micaelen/lazyenv
# or as a dev dependency
npm install --save-dev @micaelen/lazyenv
```

## Usage

Generate a `.env` file in the current directory:

```bash
lazyenv
```

You can also specify a different source directory:

```bash
lazyenv src/
```

## How It Works

Lazyenv parses your project files (JavaScript by default) to detect usages of `process.env.*` and extracts the variable names. It writes a `.env` file with placeholders so you can fill in values.

## Example

Suppose your code uses:

```js
process.env.DB_HOST
process.env.API_KEY
process.env.SECRET
```

Lazyenv produces:

```
DB_HOST=
API_KEY=
SECRET=
```

## Author

- [@micaelenn](https://github.com/micaelenn)
