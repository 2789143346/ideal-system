<template>
	<scroll>
		<div id="index">
			<div class="top">蔷薇艺术学校</div>
			<div class="banner">
				<Carousel v-model="BIndex" loop arrow="never" radius-dot autoplay>
			        <CarouselItem v-for="(item,index) in imgList" :key="index">
			            <div class="demo-carousel">
			            	<img :src="item"/>
			            </div>
			        </CarouselItem>
		    	</Carousel>
			</div>
			<div class="nav">
				<ul>
					<li v-for="(item,index) in navList" :key="index">
						<router-link :to="item.path" tag="div" class="abc">
							<div class="pic">
								<img v-lazy="item.pic" alt="">
							</div>
							<div class="txt">{{item.txt}}</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="one"><Icon type="md-volume-down" size="38" color="#FF8700"/><span>终于等到你，还好我没放弃！18660914666</span></div>
			<div class="pic"><img v-lazy='"@/../static/4.png"' alt="" /></div>
			
			<div class="list">
				<div class="title">
					<span class="a"></span>
					<p>
						<span class="left">课程推荐</span>
						<span class="right">MORE</span>
					</p>
				</div>
				<ul>
					<li v-for="(item,index) in recList" :key="index" @click="goDetails(item)">
						<div class="pic">
							<img v-lazy='item.pic' alt="">
						</div>
						<div class="txt">{{item.txt}}</div>
					</li>
				</ul>
			</div>
			<div class="video">
				<img v-lazy='"@/../static/video.jpg"' alt="" />
			</div>
			<div class="alls" @click="coll">
				<img v-lazy='"@/../static/images/zzz.png"' alt="">
				<span>蔷薇艺术学院</span>
			</div>
		</div>
	</scroll>
</template>

<script>
	import {Icon} from "IView";
	import scroll from "@/components/scroll/scroll"
	export default{
		data(){
			return{
				BIndex:0,
				imgList:["@/../static/1.jpg","@/../static/2.jpg","@/../static/3.jpg"],
				navList:[
					{
						pic:"@/../static/images/8.png",
						path:"/recommend",
						txt:"课程推荐",
					},
					{
						pic:"@/../static/images/9.png",
						path:"/school",
						txt:"学校简介",
					},
					{
						pic:"@/../static/images/10.png",
						path:"/teacher",
						txt:"师生风采",
					},
					{
						pic:"@/../static/images/11.png",
						path:"/nine",
						txt:"9.9元暑假班",
					},
				],
				recList:[
					{
						pic:"@/../static/images/1.png",
						txt:"少儿模特",
					},
					{
						pic:"@/../static/images/2.png",
						txt:"舞蹈",
					},
					{
						pic:"@/../static/images/3.png",
						txt:"钢琴",
					},
					{
						pic:"@/../static/images/4.png",
						txt:"声乐",
					},
					{
						pic:"@/../static/images/5.png",
						txt:"古筝",
					},
					{
						pic:"@/../static/images/6.png",
						txt:"小提琴",
					}
				]
			}
		},
		methods:{
			goDetails(items){
				console.log(items)
				this.$router.push({
					path:"/details",
					query:{
						items
					}
				})
			},
			coll(){
				window.location.href = 'tel://100876' 
			}
		},
		components:{
			Icon,
			scroll
		}
	}
</script>

<style lang="stylus">
	#index{
		width:100%;
		list-style: none;
		.top{
			width:100%;
			height: 80px;
			background: #434343;
			line-height:80px;
			color:#fff;
			font-size:28px;
			text-indent: 20px;
		}
		.banner{
			width:100%;
			height:320px;
			background: #000;
			.ivu-carousel{
				display: flex;
				.demo-carousel{
					img{
						width:100%;
						height:320px;
					}
				}
			}
			.ivu-carousel-dots li button.radius{
				margin-top:-20px;
				background:#000;
			}
			.ivu-carousel-dots li button{
				width: 15px;
				height: 15px;
				background:#000;
				margin:0 5px;
			}
			.ivu-carousel-dots li.ivu-carousel-active button{
				width: 40px;
				background:rgba(0,0,0,.4);
				border-radius: 20px;
			}
		}
		.nav{
			width:100%;
			height:130px;
			border:1px solid #ddd;
			ul{
				width:100%;
				height:100%;
				display: flex;
				list-style: none;
				li{
					flex:1;
					.abc{
						width:100%;
						height:100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.pic{
							width:60px;
							height:60px;
							// background: #f00;
							margin-bottom:10px;
							border-radius: 50%;
							overflow:hidden;
							img{
								width:100%;
								height:100%;
							}
						}
					}
					
				}
			}
		}
		.one{
			width:100%;
			height:50px;
			display: flex;
			align-items: center;
		}
		.pic{
			width:100%;
			height:350px;
			img{
				width:100%;
				height:100%;
			}
		}
		.list{
			width:100%;
			padding:0 20px;
			box-sizing: border-box;
			.title{
				width:100%;
				height:70px;
				display: flex;
				align-items: center;
				.a{
					width:10px;
					height:40px;
					background: #f00;
					margin-right:10px;
				}
				p{
					width:98%;
					height:100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
			ul{
				width:100%;
				list-style: none;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				li{
					width:50%;
					height:260px;
					padding: 0 15px;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					.pic{
						width:100%;
						height:200px;
						// background: skyblue;
						img{
							width:100%;
							height:100%;
						}
					}
					.txt{
						
						height:50px;
						line-height: 50px;
					}
				}
			}
		}
		.video{
			width:100%;
			height:330px;
			margin:20px 0;
			img{
				width: 100%;
				height:100%;
			}
		}
		.alls{
			width:200px;
			height:80px;
			margin:40px 0 0 50%;
			transform: translate(-100px);
		}
		.scroll{
			height:90vh !important;
		}
	}
</style>