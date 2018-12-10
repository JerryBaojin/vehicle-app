<template>
	<div class="body-wrap">
		<mt-header title="用车服务评价" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>

		<div class="cont" ref="wrapper" @scroll="scrollEvent">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" @load="onLoad" :offset='300'>
					<ul class="cont-wrap">
						<li v-for="(item,index) in dataArray" @click="goDetail">
							<div>
								<p class="left-title">派车单号：PCDH123456</p>
								<p class="left-message">用车类型：公务用车</p>
								<p class="left-message">申请时间：2016-08-13</p>
							</div>
							<div class="div-right toBeAudited">
								待评价
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
		name: 'evaluate',
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
//				console.log(this.scroll)
			},200),
			//去详情页面
			goDetail() {
				this.$router.push('/evaluateDetail?id=22');
			}
		},
		created() {
			
		},
		activated() {
			initScroll(this.$refs.wrapper, this.$store.state.evaluate);
		},
		deactivated() {
			if(this.$store.state.evaluate != this.scroll) {
				this.$store.dispatch('upDataEvaluate', this.scroll);
			}			
		}
	}
</script>

<style lang="less" src="@/assets/styles/vehicleApproval/vehicleApproval.less" scoped></style>