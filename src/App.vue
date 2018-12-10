<template>
	<div id="app">
		<!--<transition :name="transitionName">
			<keep-alive>
				<router-view class="child-view" v-if="$route.meta.keepAlive">
					
				</router-view>
			</keep-alive>
		</transition>
		<transition :name="transitionName">
			<router-view class="child-view" v-if="!$route.meta.keepAlive">
				
			</router-view>
		</transition>-->
		<transition :name="transitionName">
			<keep-alive :include="this.$store.state.needKeep">
				<router-view class="child-view"></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "App",
		data() {
			return {
				transitionName: '',
			}
		},
		methods: {

		},
		watch: {
			$route(to, from) {
				let isBack = this.$router.isBack;
				if(isBack) {
					this.transitionName = 'slide-right';
				} else if(isBack == false) {
					this.transitionName = 'slide-left';
				}
				this.$router.isBack = false;
			}
		},
		created() {
//			console.log(this.$store.state.needKeep)
		}
	};
</script>

<style>
	.child-view {
		position: absolute;
		transition: all .2s;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
		z-index: 99;
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		z-index: -1;
	}
</style>