var Mock = require('mockjs');
var data = function () {
    return Mock.mock({
        name: {
            first: '@FIRST',
            middle: '@FIRST',
            last: '@LAST',
            full: '@first @middle @last',
            ok:'@DATE',
            hello:'333'
        }
    })
}
module.exports = data;