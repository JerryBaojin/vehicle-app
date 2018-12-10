<template>
	<div class="body-wrap">
		<mt-header title="加油信息录入" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交</mt-button>
		</mt-header>
		<div class="message-wrap first-wrap">
			<mt-cell title="油料类型" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="加油费用">
			  	<input type="text" placeholder="请输入加油费用"/>
			</mt-cell>
			<mt-cell title="加油时间" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="加油地点">
				<input type="text" placeholder="请输入加油地点或地图上选择"/>
			  	<img src="../../../static/imgs/officialVehicle/chufadian.png"/>
			</mt-cell>
			<mt-cell title="加油量">
			  	<input type="number" placeholder="请输入加油量"/>
			</mt-cell>
			<mt-cell title="当前里程数">
			  	<input type="number" placeholder="请输入当前里程数"/>
			</mt-cell>
			<mt-cell title="支付方式" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="车牌号">
			  	<input type="text" placeholder="请输入车牌号"/>
			</mt-cell>
			<mt-cell title="备注">
			  	<input type="text" placeholder="请输入备注"/>
			</mt-cell>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'refuelingAdd',
		data() {
			return {}
		},
		mixins: [share],
	}
</script>

<style lang="less" src="@/assets/styles/officialVehicle/officialVehicle.less" scoped></style>