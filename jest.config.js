module.exports = {
    collectCoverage: false,
    coverageReporters: ['json', 'text'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/**/*.d.ts',
        '!<rootDir>/src/**/*.test.ts',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/**/prints/**/*.ts',
    ],
    preset: 'ts-jest',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    transform: {
        '^.+\\.js?$': '<rootDir>/node_modules/babel-jest',
    },
    coveragePathIgnorePatterns: ['/node_modules/'],
}
