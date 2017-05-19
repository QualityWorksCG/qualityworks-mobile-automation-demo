var elements = require('../../common/elements.js');
var client = browser;

describe('Testing addition functionality', function(){
    this.timeout(300000);
    var numbers =[3,6];
    
    //ES6 generator - yield
    it('should fill two fields with numbers', function* () { 
        yield client.setValue(elements.txt1,numbers[0])
        yield client.pause(5000)
        var textOneValue = yield client.getValue(elements.txt1)
        textOneValue.should.not.equal(null);
        
        yield client.setValue(elements.txt2,numbers[1])
        yield client.pause(5000)
        var textTwoValue = yield client.getValue(elements.txt2)
        textTwoValue.should.not.equal(null);
    });
    
    it('should compute the numbers and produce correct addition', function* () {
        yield client.click(elements.btnSum)
        var textAnwserValue = yield client.getText(elements.txtAns)
        parseInt(textAnwserValue, 10).should.equal(numbers[0] + numbers[1]);
    });
});
