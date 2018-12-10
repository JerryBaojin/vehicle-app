<template>
	<div class="body-wrap">
		<mt-header title="车辆三勤三检" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交</mt-button>
		</mt-header>
		<div class="message-wrap first-wrap">
			<mt-cell title="车牌号" is-link>
			  	<span>请选择</span>
			</mt-cell>	
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">车辆信息1</span>
						<span class="cont-right">车辆信息</span>
					</li>
					<li>
						<span class="cont-left">车辆信息2</span>
						<span class="cont-right">车辆信息</span>
					</li>
					<li>
						<span class="cont-left">车辆信息1</span>
						<span class="cont-right">车辆信息</span>
					</li>
				</ul>				
			</div>		
		</div>
		<div class="textarea-wrap bottom-wrap">
			<mt-cell title="状态选择" is-link>
			  	<span>请选择</span>
			</mt-cell>	
			<p class="textarea-title">备注</p>
			<mt-field placeholder="请输入备注" type="textarea" rows="3"></mt-field>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'diligentFrugalAdd',
		data() {
			return {}
		},
		mixins: [share],
	}
</script>

<style lang="less" src="@/assets/styles/officialVehicle/officialVehicle.less" scoped></style>