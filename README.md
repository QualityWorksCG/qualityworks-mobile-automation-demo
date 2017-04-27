# README #

Getting Started

### What is this repository for? ###

* Proof of Concept
* Mobile :telephone: testing using Node, Appium, and Sauce Lab 
* Integration with CI ultimately - in process :construction:

### How to get set up ###

* Configuration :wrench:
    * #### Install appium gloablly
        + `$ npm install -g appium`
    * #### Install webdriver.io gloablly this will be our appium client
        + `$ npm install -g webdriverio@3.4.0`
    * #### Clone Project 
        + `$ git clone https://<username>@bitbucket.org/qwmobiletesting/saucelab_mobile_demo.git testApp`
        + `$ cd testApp`
    * #### Get Dependencies
        + `$ npm install`
    * #### Upload application for testing
        + `$ curl -u <USERNAME>:<YOUR_ACCESS_KEY> -X POST -H "Content-Type: application/octet-stream" "https://saucelabs.com/rest/v1/storage/<USERNAME>/TestApp.app.zip?overwrite=true" --data-binary @<Path  to App .zip in the app folder of testApp>`
    * #### Get & Start Sauce Connect - Manual (RECOMMENDED)
        + Signup for Sauce Lab account if you don't have one already
        + Download Sauceconnect: https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect
           - Find downloaded package and unzip then `cd` to folder in new tab or new terminal window
           - `$ bin/sc -u YOUR_USERNAME -k YOUR_ACCESS_KEY` #start server
           - Verify that server is running: Go to https://saucelabs.com/beta/tunnels : A tunnel should be active
    * #### Get & Start Sauce Connect - NPM (In Progress) :construction:
        + `$ npm get-sauce-connect`
      
* How to run tests :tada:
    * #### Sauce Lab
        + `$ wdio wdio.saucelab.conf.js`
    * #### Locally - Simulator
        + `$ appium & #start appium`
        + `$ wdio wdio.local.conf.js`
    * #### Native
        + ##### Depenpencies
            - Phone must be connected and unlocked
            - Edit **wdio.native conf.js** depending on the device being used. Device info: **Xcode > Window > Decives** 
            - udid,bundleId,and deciveName in capabilities must match to your Device 
        + `$ appium & #start appium`
        + `$ wdio.native.conf.js`

### Helpers ###
* Useful link to help with configuration, also you can find out the available resources that are on sauce lab: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact