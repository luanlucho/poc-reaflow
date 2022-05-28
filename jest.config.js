const path = require("path");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: [
    "node_modules",
    path.join(__dirname, "src"),
    path.join(__dirname, "src/utils/testUtils")
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  setupFiles: ["<rootDir>/src/utils/testUtils/setupTestsBeforeEnv.ts"],
  setupFilesAfterEnv: ["<rootDir>/src/utils/testUtils/setupTests.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    "^.+\\.css$": "<rootDir>/src/config/jest/cssTransform.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|less)$": "<rootDir>/src/config/jest/styleMock.js",
    "\\.svg$": "<rootDir>/src/config/jest/svgrMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/src/config/jest/fileMock.js"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json"
    }
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.types.ts",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      statements: 5,
      branches: 1,
      lines: 5,
      functions: 1
    }
  }
};
