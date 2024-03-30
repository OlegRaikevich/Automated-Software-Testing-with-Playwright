# Automated-Software-Testing-with-Playwright

## Introduction
Welcome to the documentation for the automation tests developed using Playwright. This document provides an overview of the test suite, instructions for running the tests, and guidelines for interpreting the results.
It is education project about automation testing with Playwright. All tests in this project are written to test the ZeroBanking platform.

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

To run the automation tests, execute the following command:

```bash
npm test
```

This command will execute all tests defined in the test suite.
But if you want to run a specific set of tests, such as UI, visual tests, or API tests you can use the following commands:

Run all tests in Chrome browser
```bash
npm run tests:chrome
```
Run all tests in Firefox browser
```bash
npm run tests:firefox
```
Run all tests in Safari browser
```bash
npm run tests:webkit
```
Run e2e tests in Chrome browser
```bash
npm run tests:e2e
```
Run visual tests in Chrome browser
```bash
npm run tests:visual:chrome
```
Run visual tests in Firefox browser
```bash
npm run tests:visual:firefox
```
Run visual tests in Safari browser
```bash
npm run tests:visual:webkit
```

## Test Structure

The test suite is organized into directories based on test scenarios and features. Within each directory, individual test files contain test cases for specific functionalities. The structure follows the Page Object Model (POM) design pattern to enhance test maintainability and readability.

## Test Reporting

After executing the tests, a test report will be generated, providing details about test execution, including:

- Number of tests executed
- Passed, failed, and skipped tests
- Execution time for each test case
- Any errors or exceptions encountered during test execution
