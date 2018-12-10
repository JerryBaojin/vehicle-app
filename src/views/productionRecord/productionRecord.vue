<template>
	<div class="cont" ref="wrapper" @scroll="scrollEvent">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<van-list v-model="loading" :finished="finished" @load="onLoad" :offset='300'>
				<ul class="cont-wrap">
					<li v-for="(item,index) in dataArray" @click="goDetail">
						<div>
							<p class="left-title">生产用车申请</p>
							<p class="left-message">用车人：张三</p>
							<p class="left-message">申请时间：2016-08-13</p>
						</div>
						<div class="div-right toBeAudited">
							待审核
						</div>
					</li>
				</ul>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
	import share from '../share';
	import { debounce, initScroll } from '../../common/common';
	export default {
		name: 'productionRecord',
		data() {
			return {
				isLoading: false,
				dataArray: [0, 1, 2, 3, 4, 5],
				loading: false, // 加载
				finished: false, // 结束
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
			//去详情页面
			goDetail() {
				this.$router.push('/officialDetail?id=22');
			}
		},
		created() {
			
		},
		activated() {
			initScroll(this.$refs.wrapper, this.$store.state.productionRecord);
		},
		deactivated() {
			if(this.$store.state.productionRecord != this.scroll) {
				this.$store.dispatch('upDataProduction', this.scroll);
			}			
		}
	}
</script>

<style lang="less" src="@/assets/styles/officialRecord/officialRecord.less" scoped></style>