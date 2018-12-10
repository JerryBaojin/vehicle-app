<template>
	<div class="body-wrap">
		<mt-header title="车辆三勤三检" fixed >
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right" @click="toAdd">新增</mt-button>
		</mt-header>
		<div class="cont" ref="wrapper" @scroll="scrollEvent">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
				<van-list v-model="loading" :finished="finished" @load="onLoad" :offset='300'>
					<ul class="cont-wrap">
						<li v-for="(item,index) in dataArray" @click="goDetail">
							<div class="diligentFrugal-wrap">
								<p class="left-title">车牌号：闽D888888</p>							
								<p class="left-message">检查日期：2016-08-13</p>
								<p class="left-message">检查状态：出车前</p>
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
		name: 'diligentFrugal',
		data() {
			return {
				isLoading: false,
				dataArray: [0, 1, 2, 3, 4, 5, 6, 7,8],
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
					this.dataArray = [0, 1, 2, 3, 4, 5, 6, 7,8];
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
				this.$router.push('/diligentFrugalDetail?id=22');
			},
			//去新增页面
			toAdd() {
				this.$router.push('/diligentFrugalAdd');				
			}
		},
		created() {
			
		},
		activated() {
			initScroll(this.$refs.wrapper, this.$store.state.diligentFrugal);
		},
		deactivated() {
			if(this.$store.state.diligentFrugal != this.scroll) {
				this.$store.dispatch('upDataDiligent', this.scroll);
			}			
		}
	}
</script>

<style lang="less" src="@/assets/styles/vehicleApproval/vehicleApproval.less" scoped></style>