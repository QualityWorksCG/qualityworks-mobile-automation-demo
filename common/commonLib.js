var ele = require('./elements.js');
var TIMEOUT = 5000;
var values =[3,6];

/**
*   Description:
*     
*
*    
*/
var verifySum = function () {
    return this
        .getText(ele.txtAns).then( function(answer) {
            console.log('Attribute found: ' + answer);
            parseInt(answer, 10).should.equal(values[0] + values[1]);
        });
};
// export the function
module.exports.verifySum = verifySum;

/**
*   Description:
*     Pause for 5 seconds
*
*/
var wait = function () {
    return this
        .pause(5000);
};
// export the function
module.exports.wait = wait;