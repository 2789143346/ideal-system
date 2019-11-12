<template>
	<div id="home">
		<router-view></router-view>
		<bottom></bottom>
	</div>
</template>

<script>
	import bottom from "@/components/bottom/bottom"
	export default{
		data(){
			return{
				
			}
		},
		components:{
			bottom
		}
	}
</script>

<style>
	#home{
		width: 100%;
		height:100vh;
	}
</style>