<template>
	<div ref="detialAll" class="scroll">
		<slot></slot>
	</div>
</template>

<script>
	import BetterScroll from 'better-scroll';
	export default{
		data(){
			return{
				bs:{}
			}
		},
		methods:{
			init(){
				this.bs = new BetterScroll(this.$refs.detialAll,{
					click:true,
					probeType:3,
					scrollX:true,
					scrollY:true
				})
			}
		},
		mounted(){
			setTimeout(()=>{
				this.init();
			},300)
		}
	}
</script>

<style>
	.scroll{
		height:91vh;
		overflow: hidden;
	}
</style>