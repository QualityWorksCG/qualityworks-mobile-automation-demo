var elements = {
    txt1: '//UIATextField[@name=\'IntegerA\']',
    //txt1: '//UIAApplication[1]/UIAWindow[1]/UIATextField[1]/UIATextField[1]',
    txt2: '//UIATextField[@name=\'IntegerB\']',
    done: 'Done',
    btnSum: '//UIAButton[@name=\'ComputeSumButton\']',
    txtAns: '//UIAStaticText[@name=\'Answer\']',
    btnShowAlert: '//UIAButton[@name=\'show\ alert\']',
    popup: '//UIAScrollView[@size=\'{270,\ 84}\']',
    popup2: '//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIAScrollView[1]'
};
module.exports = elements;