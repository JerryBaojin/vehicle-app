<template>
	<div class="body-wrap">
		<mt-header title="保养信息录入" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交</mt-button>
		</mt-header>
		<div class="message-wrap first-wrap">
			<mt-cell title="车牌号">
			  	<input type="text" placeholder="请输入车牌号"/>
			</mt-cell>
			<mt-cell title="保养费用">
			  	<input type="number" placeholder="请输入保养费用"/>
			</mt-cell>
			<mt-cell title="送保日期" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="完保日期" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="保养类型" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="里程">
			  	<input type="number" placeholder="请输入里程"/>
			</mt-cell>
			<mt-cell title="保养地点">
				<input class="span-left" type="text" placeholder="请输入保养地点或地图上选择"/>
			  	<img src="../../../static/imgs/officialVehicle/chufadian.png"/>
			</mt-cell>
		</div>
		<div class="textarea-wrap">
			<mt-cell title="保养部位">
			  	<input type="text" placeholder="请输入保养部位"/>
			</mt-cell>
			<p class="textarea-title">保养部位说明</p>
			<mt-field placeholder="请输入保养部位说明" type="textarea" rows="3"></mt-field>
		</div>
		<div class="textarea-wrap">
			<mt-cell title="单据信息">
			  	<span class="span-left">单据信息拍照上传</span>
			  	<img src="../../../static/imgs/officialVehicle/xiangji.png"/>
			</mt-cell>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'upkeepAdd',
		data() {
			return {}
		},
		mixins: [share],
	}
</script>

<style lang="less" src="@/assets/styles/officialVehicle/officialVehicle.less" scoped></style>