<template>
	<div class="body-wrap">
		<mt-header title="归队登记" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交登记</mt-button>
		</mt-header>
		<div class="message-wrap">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">车牌号</span>
						<span class="cont-right">闽D888888</span>
					</li>
					<li>
						<span class="cont-left">驾驶员</span>
						<span class="cont-right">张三</span>
					</li>
					<li>
						<span class="cont-left">驾驶员电话</span>
						<span class="cont-right">13655971886</span>
					</li>
					<li>
						<span class="cont-left">申请时间</span>
						<span class="cont-right">2018-06-13</span>
					</li>
					<li>
						<span class="cont-left">用车类型</span>
						<span class="cont-right">公务用车</span>
					</li>
					<li>
						<span class="cont-left">用车人</span>
						<span class="cont-right">李四</span>
					</li>
					<li>
						<span class="cont-left">用车人电话</span>
						<span class="cont-right">13655971886</span>
					</li>
					<li>
						<span class="cont-left">出发地点</span>
						<span class="cont-right">厦门</span>
					</li>
					<li>
						<span class="cont-left">目的地点</span>
						<span class="cont-right">泉州</span>
					</li>	
					<li>
						<span class="cont-left">用车事由</span>
						<span class="cont-right">因公出差</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="message-wrap message-bottom">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">出车时间</span>
						<span class="cont-right">2018-06-14</span>
					</li>
					<li>
						<span class="cont-left">归队时间</span>
						<span class="cont-right">2018-08-30</span>
					</li>
					<li>
						<span class="cont-left">用车总天数</span>
						<span class="cont-right">6天</span>
					</li>
					<li>
						<span class="cont-left">出发里程</span>
						<span class="cont-right">20000KM</span>
					</li>
					<li>
						<span class="cont-left">归队里程</span>
						<span class="cont-right">30000KM</span>
					</li>	
				</ul>				
			</div>			
		</div>
		<div class="registration-wrap">
			<mt-cell title="出车时间" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="归队时间" is-link>
			  	<span>请选择</span>
			</mt-cell>
			<mt-cell title="用车总时间" is-link>
			  	<span>自动计算时长</span>
			</mt-cell>
			<mt-cell title="出发里程">
			  	<input type="text" placeholder="请输入出发里程"/>
			</mt-cell>
			<mt-cell title="归队里程">
			  	<input type="text" placeholder="请输入归队里程"/>
			</mt-cell>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'schedulingDetail',
		data() {
			return {
				
			}
		},
		mixins: [share],
		methods: {
			
		}
	}
</script>

<style lang="less" src="@/assets/styles/officialDetail/officialDetail.less" scoped></style>