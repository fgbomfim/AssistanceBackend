module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  collectCoverageFrom: [
    'src/**/*.[jt]s?(x)',
    '!src/index.[jt]s?(x)',
    '!src/react-app-env.d.[jt]s?(x)',
    '!src/__tests__/**/*.[jt]s?(x)',
    '!src/services/serviceWorker.ts',
    '!src/model/*.ts',
    '!src/helpers/type.ts',
    '!src/setupProxy.js',
    '!src/config/*',
    '!src/interfaces/*',
    '!src/context/**/props.ts',
    '!src/services/*.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
