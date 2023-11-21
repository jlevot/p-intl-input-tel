module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    moduleNameMapper: {
        "^@app(.*)$": "<rootDir>/src/app/$1",
        "^@components(.*)$": "<rootDir>/src/app/components/$1",
        "^@directives(.*)$": "<rootDir>/src/app/directives/$1",
        "^@interceptors(.*)$": "<rootDir>/src/app/interceptors/$1",
        "^@modals(.*)$": "<rootDir>src/app/components/modals/$1",
        "^@services(.*)$": "<rootDir>/src/app/services/$1",
        "^@models(.*)$": "<rootDir>/src/app/models/$1",
        "^@pipes(.*)$": "<rootDir>/src/app/pipes/$1",
        "^@animations(.*)$": "<rootDir>/src/app/animations/$1",
        "^@assets(.*)$": "<rootDir>/src/assets/$1",
    }
};
