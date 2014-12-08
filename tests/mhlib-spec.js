/**
 * Created by litian on 14/12/6.
 */
var expect = require('expect.js');
var mhlib = require('../index');

describe('mhlib', function() {

    it('getApi', function() {
        expect(mhlib.getApi).to.be.a('function');  // add this
        expect(mhlib.getApi({base:"/newApi"})).to.eql('');
        expect(mhlib.getApi({base:"/newApi",pathname:"/shop/10/detail"})).to.contain('?');
        expect(mhlib.getApi({base:"/newApi",pathname:"/shop/10/detail"})).to.not.contain('base=');
        expect(mhlib.getApi({base:"/newApi",pathname:"/shop/10/detail",a:"a",b:1})).to.contain('?a=a&b=1');
    });

    it("type",function(){
        expect(mhlib.type).to.be.a('function');  // add this
        expect(mhlib.type.isNull(null)).to.be.ok();
        expect(mhlib.type.isUndefined()).to.be.ok();
        expect(mhlib.type.isObject({})).to.be.ok();
        expect(mhlib.type.isArray([])).to.be.ok();
        expect(mhlib.type.isString('string')).to.be.ok();
        expect(mhlib.type.isNumber(124)).to.be.ok();
        expect(mhlib.type.isFunction(function(){})).to.be.ok();
        expect(mhlib.type.isRegExp(new RegExp())).to.be.ok();
        expect(mhlib.type.isElement(document)).to.be.ok();
        expect(mhlib.type.isNaN(Number.NaN)).to.be.ok();
        expect(mhlib.type.isInfinite(Number.NEGATIVE_INFINITY)).to.be.ok();
    });
});