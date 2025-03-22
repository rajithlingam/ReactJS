### **Fixing "TextEncoder is not defined" in Jest – Step-by-Step Guide**  

If you're encountering the **"ReferenceError: TextEncoder is not defined"** error while running Jest tests in your React project, follow these steps to fix it.  

---

### **Step 1: Create `jest.setup.js`**  
1. Navigate to the **root directory** of your project.  
2. Create a new file named **`jest.setup.js`** (if it doesn’t already exist).  
3. Add the following content:  

   ```javascript
   import "@testing-library/jest-dom";
   import { TextEncoder, TextDecoder } from "util";

   global.TextEncoder = TextEncoder;
   global.TextDecoder = TextDecoder;
   ```

   This ensures that `TextEncoder` and `TextDecoder` are globally available during testing.  

---

### **Step 2: Update Jest Configuration**  
Modify the **`jest.config.js`** file in your project root and ensure it includes:  

```javascript
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/tmp/jest_rs",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // The default configuration for fake timers
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,

  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "/node_modules/"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  // transform: undefined,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};

module.exports = config;
```

This configuration ensures Jest loads `jest.setup.js` before running any tests and sets `jsdom` as the test environment.  

---

### **Step 3: Install Required Dependencies**  
Run the following command to install necessary testing dependencies:  

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom util
```

This ensures Jest, React Testing Library, and utilities like `TextEncoder` are correctly installed.  

---

### **Step 4: Clear Jest Cache & Reinstall Dependencies**  
To remove any cached configurations and reinstall dependencies:  

1. Clear Jest's cache:  
   ```bash
   npx jest --clearCache
   ```

2. Delete `node_modules` and `package-lock.json`:  
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Reinstall dependencies:  
   ```bash
   npm install
   ```

---

### **Step 5: Check Your Node.js Version**  
Ensure you're using a compatible Node.js version. Run:  

```bash
node -v
```

If your version is outdated, upgrade to the latest LTS version:  

```bash
nvm install --lts
nvm use --lts
```

---

### **Step 6: Run Tests Again**  
Once everything is set up, run your Jest tests using:  

```bash
npm test -- --coverage
```

or simply:  

```bash
npm run test
```

---

### **Final Check**  
✅ **Created `jest.setup.js`** and defined `TextEncoder`  
✅ **Updated Jest configuration (`jest.config.js`)**  
✅ **Installed all necessary dependencies**  
✅ **Cleared Jest cache and reinstalled dependencies**  
✅ **Ensured Node.js version is up-to-date**  
✅ **Successfully ran tests without errors**  

Now, your Jest tests should work fine without the **"TextEncoder is not defined"** error! 🚀