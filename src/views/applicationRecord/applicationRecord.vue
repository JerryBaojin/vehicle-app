<template>
	<div class="body-wrap">
		<mt-header title="申请记录" fixed >
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>
		<div class="tab">
			<div class="tab-item" @click="toggleTab('officialRecord',0)">
				<span class="tab-link" :class="showActive == 0 ? 'navActive' : ''" >公务用车申请记录</span>
			</div>
			<div class="tab-item"  @click="toggleTab('productionRecord',1)">
				<span class="tab-link" :class="showActive == 1 ? 'navActive' : ''" >生产用车申请记录</span>
			</div>
		</div>
		<div class="content-wrap" ref="viewBox">
			<keep-alive>
				<component :is="currentTab" :key="currentTab"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	import officialRecord from '../officialRecord/officialRecord';
	import productionRecord from '../productionRecord/productionRecord';
	export default {
		name: 'applicationRecord',
		data() {
			return {
				currentTab: 'officialRecord', //默认显示组件名
				showActive: 0, //选中tab的索引值
			}
		},
		components: {
			officialRecord,
			productionRecord
		},
		mixins: [share],
		methods: {
			//动态组件切换
			toggleTab(tab,index) {
				this.currentTab = tab;
				this.showActive = index;
			},
		},
		mounted(){

		},
		destroyed() {
			
		}
	}
</script>

<style lang="less" src="@/assets/styles/applicationRecord/applicationRecord.less" scoped></style>