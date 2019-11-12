<template>
	<div id="contact">
		<div id="container">点击下方查看地图</div>
		<div class="boxs">
			<div class="child" style="color:white;">
				<div @click="map()">
					<img src="@/../static/icon/go.png" alt="">
					<div>地图导航</div>
				</div>
				<div>
					<img src="@/../static/icon/we_in.png" alt="">
					<div>在线查询</div>
				</div>
			</div>
			<div class="child" v-for="(item,index) in datas" :key="index">
				<img v-lazy="item.img" alt="">
				<div style="width:70%;">{{item.name}}</div>
				<div v-if="item.show" style="float:right;margin-right:10px;" @click="coll">点击拨打</div>
			</div>
		</div>
		<div class="alls" @click="coll">
			<img v-lazy='"@/../static/images/zzz.png"' alt="">
			<span>蔷薇艺术学院</span>
		</div>
	</div>
</template>
<script>
import '@/../static/fixed.js'
import {aaa} from '@/../static/map.js'
export default {
    data(){
        return{
			datas:[{
					img:'@/../static/icon/phone.png',
					name:'17326577539',
					show:true
				},{
					img:'@/../static/icon/QQ.png',
					name:'1973468250',
					show:false
				},{
					img:'@/../static/icon/we.png',
					name:'17326577539',
					show:false
				},{
					img:'@/../static/icon/in.png',
					name:'临沂市经济开发区芝麻墩街道长安路小学对过(长安路与沃尔沃路交汇东500米路北)',
					show:false
				}
			],
			shows:true
		}
	},
	mounted() {
		aaa();
    },
	methods:{
		coll(){
			window.location.href = 'tel://100876' 
		},
		map(){
			if(this.shows){
				this.shows = false
				this.init()
			}
		},
		init() {
			var center = new qq.maps.LatLng(35.026304,118.439564);
			var map = new qq.maps.Map(document.getElementById("container"), {
				center: center,
    			zoom:20
			});
			var marker = new qq.maps.Marker({
				position: center,
				map: map
			});
		}
	}
}          
</script>
<style lang="stylus">
#container{
	width:100%;
	height:500px;
	margin-bottom:20px;
	border-bottom:1px solid red;
	text-align:center;
	line-height:500px;
	font-size:40px;
}
.boxs{
	width:90%;
	margin:0 0 0 5%;
	.child:first-child{
		border:0;
		div{
			float:left;
			background:black;
			padding:10px 20px 10px 0;
			div{
				padding:0;
				margin-left:0;
			}
		}
		div:last-child{
			float:right;
		}
	}
	.child{
		width:100%;
		border:2px solid black;
		box-sizing:border-box;
		line-height:40px;
		padding:10px 0;
		margin-bottom:20px;
		img{
			wdith:40px;
			height:40px;
			float:left;
			margin: 0 10px 0 10px;
		}
		div{
			float:left;
		}
	}
	.child:after {
		clear: both;
		content: " ";
		display: block;
		height: 0;
		overflow: hidden;
		visibility: hidden;
	}
}
.alls{
	width:200px;
	height:80px;
	margin:40px 0 0 50%;
	transform: translate(-100px);
}
</style>