var ometa=document.createElement('meta');
//固定的视口宽度，即设计图纸的宽度
var fixed=750;
//获取设备的宽度，在移动端中只可以用 window.screeen.width
var width=window.screen.width;
//视口宽度要缩放，放到设备中，求出缩放比例
var scale=width/fixed;
//设置meta的属性
var attr={
		'name':'viewport',
		//width=
		'content':'width='+fixed+',initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale
}
for(var key in attr){
	ometa[key]=attr[key]
}
document.head.insertBefore(ometa,document.head.children[1])