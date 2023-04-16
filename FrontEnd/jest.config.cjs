// eslint-disable-next-line no-undef
module.exports = {
    verbose: true,
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ['./setupTests.js'],
    testMatch: ["<rootDir>/**/__tests__/**/*.{js,jsx,mjs}"],
    moduleFileExtensions: ["js", "jsx", "json", "node"],
  };