
var fs = require('fs');

module.exports = function(callback, file){
    var buffer = fs.readFileSync(file);
    callback(null, buffer);
};

