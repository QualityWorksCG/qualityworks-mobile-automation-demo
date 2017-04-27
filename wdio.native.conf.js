exports.config = {

	/**
	 * server configurations
	 */
	host: 'localhost',
	port: 4723,

	/**
	 * specify test files
	 */
	specs: [
        './test/**/*.js'
    ],

	/**
	 * capabilities*/
	capabilities: [{
		browserName: '',
		'appium-version': '1.4.13',
        //port: 4723,
		platformName: 'iOS',
		platformVersion: '9.2',
        udid: '{your udid}',
        bundleId: 'io.appium.TestApp',
		deviceName: 'qualityworks\'s iPhone',
		app: './app/TestApp.app',
        name: 'Native Mobile Testing - qualityworks\'s iPhone'
     }
    //  ,
    //  {
    //     browserName: '',
	// 	'appium-version': '1.4.13',
	// 	platformName: 'iOS',
    //     //port: 4724,
	// 	platformVersion: '8.3',
    //     udid: '{your udid}',
    //     bundleId: 'io.appium.TestApp',
	// 	deviceName: 'Tester\'s iPhone',
	// 	app: '/Users/admin/Desktop/TestApp.app',
    //     name: 'Native Mobile Testing - qualityworks\'s iPhone'
    //  }
     ],
	/**
	 * test configurations
	 */
	waitforTimeout: 10000,
	framework: 'mocha',

	reporter: 'spec',
	reporterOptions: {
		outputDir: './'
	},

	mochaOpts: {
		ui: 'bdd'
	},

	/**
	 * hooks
	 */
	 before: function() {
		var chai = require('chai');
    	var chaiAsPromised = require('chai-as-promised');
        var common = require("./common/commonLib");
 
    	chai.Should();
    	chai.use(chaiAsPromised);
    	chaiAsPromised.transferPromiseness = this.transferPromiseness;
        
        // bind commands
        //browser.addCommand('verifyElementName', common.verifyElementName.bind(browser));
        browser.addCommand('verifySum', common.verifySum.bind(browser));
        browser.addCommand('wait', common.wait.bind(browser));
    },
	after: function(failures, pid, done) {
			this.end(done);
    }
};
