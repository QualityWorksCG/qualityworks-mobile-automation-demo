var element = require('../../common/elements.js');
var client = browser;

describe('Testing addition functionality', function(){
    this.timeout(300000);
    var values =[3,6];
    
    //ES6 generator - yield
    it('should fill two fields with numbers', function* () { 
        yield client.setValue(element.txt1,values[0])
        yield client.pause(5000)
        var val = yield client.getValue(element.txt1)
        val.should.not.equal(null);
        
        yield client.setValue(element.txt2,values[1])
        yield client.pause(5000)
        var val2 = yield client.getValue(element.txt2)
        val2.should.not.equal(null);
    });
    
    it('should compute the numbers and produce correct addition', function* () {
        yield client.click(element.btnSum)
        var ans = yield client.getText(element.txtAns)
        parseInt(ans, 10).should.equal(values[0] + values[1]);
    });
});
