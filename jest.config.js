/* global module */
module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,svelte,ts}",
    "!src/**/main.ts", // app route
  ],
  coveragePathIgnorePatterns: ["node_modules"],
  // coverageProvider: "v8", // fixes code coverage on untested files, but gives invalid coverage stats...
  coverageReporters: ["html", "json", "lcov", "text"],
  moduleFileExtensions: ["js", "ts", "svelte"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
    "^.+\\.ts$": "ts-jest",
  },
};
