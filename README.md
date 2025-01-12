# **Automated Software Testing with Playwright**

This repository contains automated tests built using [Playwright](https://playwright.dev/). The tests are written in **TypeScript** and follow the **Page Object Model (POM)** approach to ensure clean, maintainable, and scalable test code. The project also includes continuous integration (CI) through GitHub Actions for seamless execution of tests.

---

## **Project Structure**

The project is organized into the following folders:

- **`page-objects/`**: Contains the Page Object classes representing individual pages and their elements. Each class encapsulates actions and interactions specific to that page.
- **`tests/`**: Contains the test cases written with Playwright, utilizing the Page Object Model for cleaner and more modular code.
- **`utils/`**: Includes helper functions and utilities such as random data generators or reusable configurations.
- **`.github/workflows/`**: Contains the GitHub Actions workflow configuration for running the tests automatically in a CI environment.

---

## **Getting Started**

Follow these steps to set up and run the tests locally:

### **1. Prerequisites**
- Node.js (version 16 or higher) installed on your machine.
- A package manager `npm`.

### **2. Clone the Repository**
```bash
git clone https://github.com/OlegRaikevich/Automated-Software-Testing-with-Playwright.git
cd Automated-Software-Testing-with-Playwright
```

### **3. Install Dependencies**
Run the following command to install the required Node.js modules:
```bash
npm install
```

### **4. Run the Tests**
To execute the tests, use the Playwright test runner:
```bash
npx playwright test
```

### **5. View Test Reports**
Playwright generates detailed test reports. After running the tests, you can open the report with:
```bash
npx playwright show-report
```

---

## **Continuous Integration (CI)**

The project is integrated with **GitHub Actions** to automatically run tests on every push and pull request. The CI workflow is defined in the `.github/workflows/` directory. It ensures:
- Tests are executed in a clean environment.
- Issues are detected early in the development process.

---

## **Key Features**
- Written in **TypeScript** for type safety and modern JavaScript features.
- Implements the **Page Object Model (POM)** for better test maintainability.
- Includes random data helpers in the `utils/` folder.
- Fully integrated with **GitHub Actions** for CI/CD.

---
