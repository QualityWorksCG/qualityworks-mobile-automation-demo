var element  = require('../../common/elements.js');
var client = browser;

describe('Testing alert functionality', function(){
    this.timeout(300000); 
    
    //Callback - Done
    it('should be able to show alert and confirm text',function(done){
       return client
        .click(element.btnShowAlert)
        .alertText( function( err, text ) {
           (text).should.not.be.equal(null); 
           (text).should.include("Cool title");
           (text).should.include("this alert is so cool."); 
           return client
        }).call(done)
    });
});
