<template>
	<div id="bottom">
		<ul class="bottom-list">
			<li>
				<router-link to="/index" tag="div">
					<div class="icon"><Icon type="ios-home-outline" size="46"/></div>
					<div>网站首页</div>
				</router-link>
			</li>
			<li>
				<router-link to="/recommend" tag="div">
					<div class="icon"><Icon type="ios-time-outline" size="46"/></div>
					<div>课程推荐</div>
				</router-link>
			</li>
			<li>
				<router-link to="/apply" tag="div">
					<div class="icon"><Icon type="ios-ionitron-outline" size="46"/></div>
					<div>在线报名</div>
				</router-link>
			</li>
			<li>
				<router-link to="/contact" tag="div">
					<div class="icon"><Icon type="ios-pin-outline" size="46"/></div>
					<div>联系我们</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {Icon} from "iView"
	export default{
		data(){
			return{
				bottomList:["网站首页","课程推荐","在线报名","联系我们"]
			}
		},
		components:{
			Icon
		}
	}
</script>

<style lang="stylus">
	#bottom{
		width:100%;
		height:110px;
		background: #fff;
		position: fixed;
		bottom:0;
		left:0;
		.bottom-list{
			width:100%;
			height:100%;
			display: flex;
			align-items: center;
			li{
				flex:1;
				list-style: none;
				div{
					width:100%;
					height:100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					
				}
			}
		}
	}
</style>