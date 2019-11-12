
window.addEventListener('resize',fit);
fit();
function fit(){
    //创建meta标签
    var oMeta = document.createElement('meta');
    console.log()
    //获取原型图的宽度
    var fixed = 750;
    //获取设备的宽度
    var dw = window.screen.width;
    //获取缩放比例
    var scale = dw/fixed;
    //给 meta 标签添加属性
    oMeta.setAttribute('name','viewport');
    oMeta.setAttribute('content',`width=${fixed},initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`);
    //添加到文档中
    document.head.insertBefore(oMeta,document.head.children[1]);
}