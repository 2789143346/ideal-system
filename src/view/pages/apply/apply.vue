<template>
	<div id="recommend" style="padding-top: 1px;">
		<img v-lazy="'@/../static/images/7.png'" alt="" style="width:100%;
		height:300px;">
		<div class="box">
			<div class="zzz" v-for="(item,index) in datas" :key="index">
				<div class="aaa"><span>*</span>{{item.name}}</div>
				<input type="text" maxlength="11" v-if="index !== 3" v-model="item.val">
				<ul v-else>
					<div v-for="(items,indexs) in item.index" :key="indexs">
						<input type="checkbox" name="item" v-model="items.val" @click="az(items,indexs)">{{items.name}}
					</div>	
				</ul>
			</div>
		</div>
		<div class="btn" @click="tiJiao">
			提交
		</div>
		<div class="alls" @click="coll">
			<img v-lazy='"@/../static/images/zzz.png"' alt="">
			<span>蔷薇艺术学院</span>
		</div>
	</div>
</template>
<script>
import '@/../static/fixed.js'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
           	datas:[
				{name:'宝贝姓名',val:''},
				{name:'联系方式',val:''},
				{name:'年龄',val:''},
				{
					name:'课程精选',
					index:[
						{name:'模特大赛',val:false},
						{name:'演员招募',val:false},
						{name:'舞蹈',val:false},
						{name:'少儿模特',val:false},
						{name:'钢琴',val:false},
						{name:'声乐',val:false},
						{name:'古琴',val:false},
						{name:'小提琴',val:false},
						{name:'少儿托辅',val:false}
					]
				}
			],
			zzz:[],
			love:[]
        }
	},
	methods:{
		az(items,indexs){
			this.love.push(items.name)
		},
		coll(){
			window.location.href = 'tel://100876' 
		},
		tiJiao(){
			if(!this.datas[0].val){
				MessageBox('提示', '宝贝姓名不能为空!');
			}else if(!this.datas[1].val){
				MessageBox('提示', '联系方式不能为空!');
			}else if(!this.datas[2].val){
				MessageBox('提示', '宝贝年龄不能为空!');
			}else if(this.love.length == 0){
				MessageBox('提示', '精选课程不能为空!');
			}else{
				this.zzz.push({name:this.datas[0].val},{tal:this.datas[1].val},{age:this.datas[2].val},{love:this.love})
				MessageBox({
					title: '提示',
					message: '提交成功,我们会及时与您联系!',
					showCancelButton: true
				}).then((res)=>{
						console.log(this.zzz)
						this.zzz = [];this.love = [];
						for(var i=0;i<3;i++){
							this.datas[i].val = ''
						}
						for(var j=0;j<this.datas[3].index.length;j++){
							this.datas[3].index[j].val = false
					}
				});
				
			}
		}
	}
}          
</script>
<style lang="stylus">
.box{
	width:96%;
	margin-left:2%;
	background:white;
	.zzz{
		width:100%;
		border-bottom:1px solid #ccc;
		line-height:60px;
		.aaa{
			float:left;
			margin-right:30px;
		}
		span{
			color:red;
			padding-left:10px;
		}
		input{
			border:0;
			outline:none;
			font-size:30px;
		}
		ul{
			display:flex;
			flex-wrap:wrap;
			list-style:none;
			div{
				margin: 10px 20px 10px 0;
				line-height:40px;
				font-size:24px;
				width:150px;
				input[type="checkbox"]{
					vertical-align:middle;
					margin-right:10px;
					display: inline-block;
					width: 40px;
					height: 40px;
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					border-radius: 5px;
					border: 1px solid #888;
				}
				input[type="checkbox"]:checked{
					background: url("../../../../static/images/dui.png") no-repeat ;
					background-size: 50% 50%;
					background-position: 10px 10px;
				}
			}
		}
	}
}
.btn{
	width:96%;
	height:80px;
	margin:20px 0 0 2%;
	background:black;
	color:white;
	line-height:80px;
	text-align:center;
	font-size:35px;
	border-radius:10px;
}
.alls{
	width:200px;
	height:80px;
	margin:40px 0 0 50%;
	transform: translate(-100px);
}
</style>