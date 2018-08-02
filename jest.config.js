module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testURL: 'http://localhost:8080',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  moduleNameMapper: {
    'Scenes(.*)$': '<rootDir>/src/scenes/$1',
  },
};
