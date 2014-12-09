"use strict";
var Mhlib = (function(){
    var uid = 1;
    var mhlib = {};
    mhlib.getApi = require('./src/getApi.js');
    mhlib.type = require('./src/type.js');
    mhlib.nextUid = function(){
        return ++uid;
    };
    return mhlib;
})();
module.exports = Mhlib;