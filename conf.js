exports.config = {
    allScriptsTimeout: 500000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        'test/e2e/**/*.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8080/',

    //rootElement: '.sample-app',

    framework: 'jasmine',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000

    }
}