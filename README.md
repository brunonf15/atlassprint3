# Go2Atlas Automation Project

This repository contains the test automation project for Go2Atlas, using Playwright.

## Prerequisites

- **Node.js** installed on your machine (recommended: version 18 or higher).

## Installation

1. Install Playwright:
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

## How to run the tests

- To run all tests:
  ```bash
  npx playwright test
  ```

- To use the Playwright UI tool:
  ```bash
  npx playwright test --ui
  ```

- To use the UI tool and disable headless mode (open the browser window):
  ```bash
  npx playwright test --ui --headed
  ```
