# Automated-Software-Testing-with-Playwright

## Introduction
Welcome to the documentation for the automation tests developed using Playwright. This document provides an overview of the test suite, instructions for running the tests, and guidelines for interpreting the results. UI tests in this project are written for the ZeroBanking platform, accessible at http://zero.webappsecurity.com/index.html, and API tests are written for the Reqres platform, available at https://reqres.in.

## Table of Contents

<!-- toc -->

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Test Reporting](#test-reporting)
- [Best Practices](#best-practices)

<!-- tocstop -->

## Overview

The automation test suite utilizes Playwright, a powerful testing framework for automating web browser interactions. The project contains e2e and visual tests for UI and API tests. These tests provide quality assurance in different browsers.

## Prerequisites

Before running the automation tests, ensure that the following prerequisites are met:

- Node.js installed on your machine
- Git installed on your machine
- Access to the source code repository

## Installation

To install the necessary dependencies for running the tests, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`

## Running Tests

The simplest way to run tests is to use GitHub Actions. To run tests, go to the "Actions" tab, choose the Playwright Tests workflow, and click on the "Run workflow" button. You can find the test report in the log of that workflow.

To run the automation tests, execute the following command:

```bash
npm test
```

This command will execute all tests defined in the test suite.
But if you want to run a specific set of tests, such as UI, visual tests, or API tests you can use the following commands:
```bash
npm run tests:chrome - run all tests in Chrome browser
npm run tests:firefox - run all tests in Firefox browser
npm run tests:webkit - run all tests in Safari browser
npm run tests:e2e - run e2e tests in Chrome browser
npm run tests:visual:chrome - run visual tests in Chrome browser
npm run tests:visual:firefox - run visual tests in Firefox browser
npm run tests:visual:webkit - run visual tests in Safari browser
npm run tests:api - run api tests
```


## Project Architecture

The project is structured to facilitate organized and maintainable test automation using Playwright. Below is an overview of the key components and their roles within the project:

### 1. **Directory Structure**

- **`tests/`**: Contains all the test files.
  - **`e2e/`**: End-to-end tests for the ZeroBanking platform.
  - **`api/`**: API tests for the Reqres platform.
- **`page-objects/`**: Page Object Model (POM) classes that encapsulate the UI elements and interactions for different pages.
- **`utils/`**: Utility functions and helpers used across tests.
- **`config/`**: Configuration files for different environments and test settings.
- **`reports/`**: Generated test reports and logs.

### 2. **Page Object Model (POM)**

The Page Object Model is used to create an abstraction layer for UI interactions. Each page or component has a corresponding class in the `page-objects/` directory, which contains locators and methods to interact with the page elements.

### 3. **Test Files**

Test files are organized based on the type of tests:
- **End-to-End (e2e) Tests**: Located in the `tests/e2e/` directory, these tests simulate user interactions with the ZeroBanking platform.
- **API Tests**: Located in the `tests/api/` directory, these tests validate the RESTful endpoints of the Reqres platform.

### 4. **Configuration**

Configuration files in the `config/` directory define settings for different environments (e.g., development, staging, production). These settings include base URLs, timeouts, and other environment-specific parameters.

### 5. **Utilities**

The `utils/` directory contains helper functions and utilities that support the test execution. These may include functions for data generation, custom assertions, and common setup/teardown routines.

### 6. **Continuous Integration (CI)**

The project is integrated with GitHub Actions for continuous integration. The CI pipeline is defined in the `.github/workflows/` directory and includes steps for installing dependencies, running tests, and generating reports.

### 7. **Test Reporting**

Test results are captured and stored in the `reports/` directory. The reports include detailed logs, screenshots, and other artifacts that help in debugging and analyzing test outcomes.

### 8. **Best Practices**

The project follows best practices for test automation, including:
- Using the Page Object Model to reduce code duplication and improve maintainability.
- Organizing tests based on functionality and type.
- Implementing retries and error handling to reduce test flakiness.
- Running tests in parallel to optimize execution time.
- Generating detailed reports for better visibility into test results.

This architecture ensures that the test suite is scalable, maintainable, and easy to understand, providing robust quality assurance for the ZeroBanking and Reqres platforms.