module.exports = {
    moduleNameMapper: {
        'styled-components': '<rootDir>/node_modules/styled-components',
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    },
    testPathIgnorePatterns: ['/.next/', '/node_modules/', '/tests/', '/coverage/'],
    testRegex: '/__tests__/.*\\.(test|spec)\\.js?$',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
}
