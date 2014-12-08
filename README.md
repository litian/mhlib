# 觅食

---

### 组装接口

```javascript
seajs.use('index', function(mhlib) {
   var config = {base:"/newApi",pathname:"/shop/10/detail",a:"a",b:1}
   console.log(mhlib.getApi(config)); //newApi/shop/10/detail?a=a&b=1'
})；
```