<template>
	<div class="body-wrap">
		<mt-header title="生产用车申请" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交</mt-button>
		</mt-header>
		<div class="message-wrap first-wrap">
			<mt-cell title="申请单位" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="申请部门" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="申请时间" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="申请类型" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="申请人">
			  	<input type="text" placeholder="请输入姓名"/>
			</mt-cell>
			<mt-cell title="申请人电话">
			  	<input type="tel" placeholder="请输入电话"/>
			</mt-cell>
			<mt-cell title="用车项目">
			  	<input type="tel" placeholder="请输入用车项目"/>
			</mt-cell>
			<mt-cell title="用车人">
			  	<input type="tel" placeholder="请输入姓名"/>
			</mt-cell>
			<mt-cell title="用车电话">
			  	<input type="tel" placeholder="请输入电话"/>
			</mt-cell>
			<mt-cell title="出行人数">
			  	<input type="text" placeholder="请输入人数"/>
			</mt-cell>
		</div>
		<div class="textarea-wrap">
			<p class="textarea-title">出车原因</p>
			<mt-field placeholder="请输入出车原因" type="textarea" rows="3"></mt-field>
		</div>
		<div class="textarea-wrap">
			<mt-cell title="出发地点">
				<input type="text" placeholder="请输入出发点或地图上选择"/>
			  	<img src="../../../static/imgs/officialVehicle/chufadian.png"/>
			</mt-cell>
			<mt-cell title="目的地点">
				<input type="text" placeholder="请输入目的点或地图上选择"/>
			  	<img src="../../../static/imgs/officialVehicle/chufadian.png"/>
			</mt-cell>
		</div>			
		<div class="textarea-wrap bottom-wrap">
			<p class="textarea-title">备注</p>
			<mt-field placeholder="请输入备注" type="textarea" rows="3"></mt-field>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'productionVehicle',
		data() {
			return {}
		},
		mixins: [share],
	}
</script>

<style lang="less" src="@/assets/styles/officialVehicle/officialVehicle.less" scoped></style>