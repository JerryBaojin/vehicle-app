<template>
	<div class="body-wrap">
		<mt-header fixed title="预警提醒">
			<mt-button slot="right" @click="loginOut">
				<img class="header-img" src="../../../static/imgs/home/tuichu.png"/>
			</mt-button>
		</mt-header>
		<div class="waring-wrap" ref="wrapper" @scroll="scrollEvent">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" @load="onLoad" :offset='300'>
					<ul>
						<li v-for="(item,index) in dataArray">
							<span class="time-wrap">06月19日 09:27</span> <br />
							<div class="message-wrap">
								<p class="message-title">超速提醒</p>
								<p class="message-cont">闽D88888，于2018-06-19 09:33在某某路段超速时速为100/h
								</p>
							</div>
						</li>
					</ul>
				</van-list>
			</van-pull-refresh>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	import { debounce, initScroll } from '../../common/common';
	export default {
		name: 'warning',
		data() {
			return {
				isLoading: false,
				dataArray: [0, 1, 2, 3, 4, 5],
				loading: false, // 加载
				finished: false, // 结束
				scroll: 0
			}
		},
		mixins: [share],
		methods: {
			// 下拉刷新
			onRefresh() {
				setTimeout(() => {
					this.dataArray = [0, 1, 2, 3, 4, 5];
					this.isLoading = false; // 下拉刷新
					this.$toast({
						message: '刷新成功',
						duration: 1000
					});
				}, 1000)
			},
			// 瀑布流
			onLoad() {
				this.loading = true;
				setTimeout(()=> {
					let tempArray = [];
					let lastItem = this.dataArray[this.dataArray.length - 1];
					for(let i = 0; i < 6; i++) {
						this.dataArray.push(i + lastItem + 1);
					}
					this.loading = false;					
				},1000)
			},
			//滚动监听
			scrollEvent: debounce(function() {
				this.scroll = this.$refs.wrapper.scrollTop;
			},200),
		},
		created() {
			
		},
		activated() {
			initScroll(this.$refs.wrapper, this.$store.state.warningScroll);
		},
		deactivated() {
			if(this.$store.state.warningScroll != this.scroll) {
				this.$store.dispatch('upDataWarningScroll', this.scroll);
			}			
		}
	}
</script>

<style lang="less" src="@/assets/styles/warning/warning.less" scoped></style>