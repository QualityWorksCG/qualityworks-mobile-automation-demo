var ele  = require('../../common/elements.js');
var client = browser;

describe('Testing addition functionality', function(){
    this.timeout(300000);
    var values =[3,6];
    
    //ES6 generator - yield
    it('should fill two fields with numbers', function* () { 
        yield client.setValue(ele.txt1,values[0])
        yield client.pause(5000)
        var val = yield client.getValue(ele.txt1)
        val.should.not.equal(null);
        
        yield client.setValue(ele.txt2,values[1])
        yield client.pause(5000)
        var val2 = yield client.getValue(ele.txt2)
        val2.should.not.equal(null);
    });
    
    it('should compute the numbers and produce correct addition', function* () {
        yield client.click(ele.btnSum)
        var ans = yield client.getText(ele.txtAns)
        parseInt(ans, 10).should.equal(values[0] + values[1]);
    });
});
