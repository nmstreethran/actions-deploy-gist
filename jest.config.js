module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/lib'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  verbose: true
}
