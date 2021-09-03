// Karma configuration file, see link for more information
// https://karma-runner.github.io/4.0/config/configuration-file.html

// https://github.com/karma-runner/karma-chrome-launcher
process.env.CHROME_BIN = require("puppeteer").executablePath();

module.exports = config => {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "@angular-devkit/build-angular"],
        plugins: [
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-jasmine-html-reporter"),
            require("karma-coverage"),
            require("@angular-devkit/build-angular/plugins/karma")
        ],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true // removes the duplicated traces
        },
        coverageReporter: {
            dir: require("path").join(__dirname, "../coverage"),
            subdir: ".",
            reporters: [
                {
                    type: "lcov",
                    subdir: "."
                },
                {
                    type: "text-summary",
                    subdir: "."
                }
            ]
        },
        files: [
            "../node_modules/jquery/dist/jquery.min.js"
        ],
        reporters: ["progress", "kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["ChromeHeadlessNoSandbox"],
        captureTimeout: 45000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 30000,
        singleRun: true,
        // https://docs.travis-ci.com/user/chrome#Sandboxing
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                displayName: "ChromeHeadlessNoSandbox",
                base: "ChromeHeadless",
                // Flags ajoutés par default par Puppeteer
                // https://github.com/puppeteer/puppeteer/blob/v5.4.1/src/node/Launcher.ts#L158
                // Flags ajoutés par "karma-chrome-launcher"
                // https://github.com/karma-runner/karma-chrome-launcher/blob/v3.1.0/index.js#L169
                flags: [
                    "--disable-extensions",
                    "--disable-notifications",
                    "--disable-setuid-sandbox",
                    "--disable-site-isolation-trials",
                    "--disable-web-security",
                    "--ignore-certificate-error",
                    "--no-sandbox",
                    "--proxy-bypass-list=*",
                    "--proxy-server='direct://'"
                ]
            }
        }
    });
};
