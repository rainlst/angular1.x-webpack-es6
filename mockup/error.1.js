var Mock = require('mockjs');
var data = function () {
    return Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
}
module.exports = data;