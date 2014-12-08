//类型判断
var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Element', 'NaN', 'Infinite'].forEach(function (t) {
    type['is' + t] = function (o) {
        return type(o) === t.toLowerCase();
    };
});
module.exports = type;