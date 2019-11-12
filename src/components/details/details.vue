<template>
	<div id="details">
		<div class="top">
			<Icon type="ios-arrow-back" size="48" @click="goPrev"/>
			<span>{{indexData.txt}}</span>
		</div>
		<div class="box">
			<div class="pic1"><img :src="picData[0]" alt="" /></div>
			<div class="txt1">{{txt1}}</div>
			<div class="pic2"><img :src="picData[1]" alt="" /></div>
			<div class="list">
				<ul v-for="(item,index) in listData">
					<li><span class="red">{{item.title}}</span></li>
					<li v-for="(items,index) in item.txt">{{items}}</li>
				</ul>
			</div>
		</div>
		<div class="fn">
			<div class="left">
				<ul>
					<li><Icon type="md-eye" size="38"/><span>61</span></li>
					<li><Icon type="md-thumbs-up" size="38"/><span>12</span></li>
				</ul>
			</div>
			<div class="right">
				<div class="btn">
					<Icon type="md-create" size="38"/>
					<span>写评论</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {Icon} from "IView";
	export default{
		data(){
			return{
				indexData:{},
				picData:["/static/5.jpg","/static/4.jpg"],
				txt1:`小提琴是一种弦乐器。总共有四根弦。靠弦和弓摩擦发出声音。小提琴琴身（共鸣箱）长约35.5厘米，由具有弧度的面板、背板和侧板粘合而成。
						面板常用云杉制作，质地较软；背板和侧板用枫木，红木，质地较硬。琴头、琴颈用整条枫木，指板用乌木。
						小提琴广泛流传于世界各国，是现代管弦乐队弦乐组中最主要的乐器。它在器乐中占非常重要的地位，是现代交响乐队的支柱，也是具有高难度演奏技巧的独奏乐器，与钢琴、古典吉他并称为世界三大乐器。`,
				listData:[
					{
						title:"招生条件",
						txt:[
							"招生对象：初学者，喜欢小提琴的学员",
							"教学内容：初学者，注重兴趣培养，感受学琴乐趣。了解和掌握小提琴演奏技能，掌握小提琴基础演奏方法，五线谱与乐理知识。"
						]
					},
					{
						title:"上课时间",
						txt:["周六","周日","暑假"]
					},
					{
						title:"常年招生，随到随学",
					}
				]
			}
		},
		methods:{
			getIndexData(){
				this.indexData = this.$route.query.items;
				console.log(this.indexData);
			},
			goPrev(){
				this.$router.go(-1);
			}
		},
		components:{
			Icon
		},
		created(){
			this.getIndexData();
		}
	}
</script>

<style lang="stylus">
	#details{
		width: 100%;
		height: 100vh;
		.top{
			width:100%;
			height: 80px;
			background: #434343;
			display: flex;
			align-items: center;
			color:#fff;
			font-size:28px;
			text-indent: 10px;
		}
		.box{
			padding:25px 15px;
			box-sizing: border-box;
			.pic1{
				width:100%;
				height:400px;
				background: #ddd;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.pic2{
				width:100%;
				height:300px;
				background: #ddd;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.txt1{
				width:100%;
				padding:30px 0;
				font-size:26px;
			}
			.list{
				width:100%;
				ul{
					width:100%;
					padding:30px 0 0 0;
					list-style: none;
					li{
						width:100%;
						padding:10px 0;
						display: flex;
						align-items: center;
						font-size:26px;
						.red{
							font-size:28px;
							background: #F46300;
							color: #fff;
							padding:5px 10px;
						}
					}
					
				}
			}
		}
		.fn{
			width:100%;
			height:60px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left{
				width:100%;
				ul{
					list-style: none;
					display: flex;
					li{
						margin:0 20px;
						font-size:26px;
						display: flex;
						align-items: center;
						i{
							margin:0 10px;
						}
					}
				}
			}
			.right{
				width:100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size:26px;
				span{
					margin:0 5px;
				}
			}
		}
	}
</style>