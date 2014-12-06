/**
 * Created by litian on 14/12/6.
 */
var $ = require("jquery");
function getApi(options){
    var params = [],api;
    //默认api参数
    var opts = $.extend(apiOptions,options);
    var base = options.base || "/newApi";//"http://127.0.0.1:8080/mishi-webapp";
    delete options.base;
    //组装api
    if(!options.apiName){
        return '';
    }else{
        base += options.apiName + '?';
    }
    //附加参数
    $.each(opts,function(key,value){
        if(key != "apiName"){
            params.push(key + '=' + value);
        }
    });
    //console.log(params);
    api = base + params.join("&");
    return api;
}

module.exports = getApi;