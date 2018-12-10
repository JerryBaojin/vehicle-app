<template>
	<div class="body-wrap">
		<mt-header title="手动调度" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交</mt-button>
		</mt-header>
		<div class="message-wrap first-wrap">
			<mt-cell title="车牌号" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="驾驶员" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="驾驶员电话">
			  	<input type="tel" placeholder="请输入电话"/>
			</mt-cell>
			<mt-cell title="调度时间" is-link>
			  	<span>2018-06-14 15:30</span>
			</mt-cell>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'manualScheduling',
		data() {
			return {
				
			}
		},
		mixins: [share],
		
	}
</script>

<style lang="less" src="@/assets/styles/manualScheduling/manualScheduling.less" scoped></style>