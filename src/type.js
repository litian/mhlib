"use strict";
//类型判断
function type (o){
    var s = Object.prototype.toString.call(o);
    var t = s.match(/\[object (.*?)\]/)[1].toLowerCase();
    //判断NaN 和 Infinite
    if(t == "number"){
        t = "NaN" == ('' + o) ? "NaN" : /Infinity|\-Infinity/g.test('' + o) ? "Infinite" : t;
    }
    return t;
}
['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Element', 'NaN', 'Infinite'].forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o).toLowerCase() === t.toLowerCase();
    };
});
module.exports = type;