const esModules = ['sequelize'].join('|')

module.exports = {
    rootDir: '.',
    roots: ['<rootDir>/__tests__'],
    modulePaths: [
        "<rootDir>/node_modules"
    ],
    testEnvironment: "node",
    transformIgnorePatterns: [
        `<rootDir>/node_modules/(?!${esModules})`
    ]
};
