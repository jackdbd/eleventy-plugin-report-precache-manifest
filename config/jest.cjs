const config = {
  // https://jestjs.io/docs/configuration#clearmocks-boolean
  clearMocks: true,

  globals: {},

  moduleFileExtensions: ['cjs', 'js'],
  testMatch: [`<rootDir>/__tests__/**/*.test.{cjs,js}`],

  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: 'node',

  verbose: true
}

// console.log('=== jest config ===', config)

module.exports = config
