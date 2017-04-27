var sauceConnectLauncher = require('sauce-connect-launcher');
sauceConnectLauncher({
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY
}, function (err, sauceConnectProcess) {
    if (err) {
        console.error(err.message);
    return;
    }
    console.log("Sauce Connect ready");
});