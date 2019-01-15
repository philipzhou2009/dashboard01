// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

AWS.config.update({
    region: 'ap-southeast-1'
});

// Create CloudWatch service object
var cw = new AWS.CloudWatch({
    apiVersion: '2010-08-01'
});

var params = {
    Dimensions: [{
        Name: 'LogGroupName',
    }, ],
    MetricName: 'IncomingLogEvents',
    Namespace: 'AWS/Logs'
};

cw.listMetrics(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Metrics:")
        console .log(JSON.stringify(data.Metrics, null, 2));
    }
});

cw.