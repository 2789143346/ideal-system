<template>
	<div id="recommend" style="padding-top: 1px;">
		<div class="box" v-if="show">
			<div class="child" v-for="(item,index) in datas" :key="index" @click="goDetails(item)">
				<img v-lazy="item.img" alt="">
				<div>{{item.txt}}</div>
			</div>
		</div>
		<div class='jzgd' @click="a">
			加载更多
		</div>
		<div class="alls" @click="coll">
			<img v-lazy='"@/../static/images/zzz.png"' alt="">
			<span>蔷薇艺术学院</span>
		</div>
	</div>
</template>
<script>
import '@/../static/fixed.js'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return{
			show:true,
           	datas:[
			   	{
				   img:"@/../static/images/1.png",
				   txt:'少儿模特'
				},{
				   img:"@/../static/images/2.png",
				   txt:'舞蹈'
				},{
				   img:"@/../static/images/3.png",
				   txt:'钢琴'
			   	},{
				   img:"@/../static/images/4.png",
				   txt:'声乐'
			   	},{
				   img:"@/../static/images/5.png",
				   txt:'古琴'
			   	},{
				   img:"@/../static/images/6.png",
				   txt:'小提琴'
			   	}
		   	]
        }
	},
	methods:{
		a(){
			this.show = false;
			// this.show = true;
			Indicator.open({
				text: '加载中....',
				spinnerType: 'fading-circle'
			});
			var timer = setTimeout(() => {
				Indicator.close();
				this.show = true;
			}, 2000);
		},
		coll(){
			window.location.href = 'tel://100876'
		},
		goDetails(items){
			console.log(items)
			this.$router.push({
				path:"/details",
				query:{
					items
				}
			})
		}
	},
    created(){
        
    }
}
</script>
<style lang="stylus">
.box{
	width:90%;
	margin-left:5%;
	display:flex;
	justify-content :space-between;
	flex-wrap:wrap;
	.child{
		width:45%;
		height:240px;
		background:white;
		margin:20px 15px 0 15px;
		img{
			width:100%;
			height:160px;
			background:pink;
		}
		div{
			line-height:40px;
			text-align:center;
			font-size:24px;
		}
	}
}
.box:after {
	content: "";
	flex: auto;	
}
.jzgd{
	width:250px;
	height:60px;
	background:rgba(211,210,209,1);
	text-align:center;
	line-height:60px;
	margin:30px 0 0 50%;
	color:white;
	transform: translate(-125px);
}
.alls{
	width:200px;
	height:80px;
	margin:40px 0 0 50%;
	transform: translate(-100px);
}
</style>