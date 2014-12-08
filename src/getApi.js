/**
 * Created by litian on 14/12/6.
 */
function getApi(options){
    var params = [],api = "",opts = options || {};
    //组装api
    api += options.base ? options.base : "";
    if (options.pathname) {
        api += options.pathname + '?';
    } else {
        return '';
    }
    //附加参数
    delete opts.base;
    delete opts.pathname;
    for(var key in opts){
        if (opts.hasOwnProperty(key)) {
            params.push(key + '=' + opts[key]);
        }
    }
    //console.log(params);
    api = api + params.join("&");
    return api;
}

module.exports = getApi;