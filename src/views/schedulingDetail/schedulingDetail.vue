<template>
	<div class="body-wrap">
		<mt-header title="调度详情" fixed >
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>
		<div class="message-wrap">
			<!--<div class="message-title">
				<span class="title-left">生产用车申请</span>
				<span class="success state-right">已通过</span>
			</div>-->
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">派车单号</span>
						<span class="cont-right">PCHD123456</span>
					</li>
					<li>
						<span class="cont-left">用车类型</span>
						<span class="cont-right">公务用车</span>
					</li>
					<li>
						<span class="cont-left">用车人</span>
						<span class="cont-right">张三</span>
					</li>
					<li>
						<span class="cont-left">开始时间</span>
						<span class="cont-right">2018-06-13</span>
					</li>
					<li>
						<span class="cont-left">结束时间</span>
						<span class="cont-right">2018-07-21</span>
					</li>
					<li>
						<span class="cont-left">当前操作</span>
						<span class="cont-right success">已调度</span>
					</li>
					<li>
						<span class="cont-left">出车原因</span>
						<span class="cont-right">因公出差</span>
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
						<span class="cont-left">审批人</span>
						<span class="cont-right">李四</span>
					</li>
					<li>
						<span class="cont-left">审批意见</span>
						<span class="cont-right">暂无意见</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="message-wrap message-bottom">
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
						<span class="cont-left">调度时间</span>
						<span class="cont-right">2018-06-13 14:35</span>
					</li>					
				</ul>				
			</div>			
		</div>
		<div class="dbButton-wrap">
			<button class="button-left" @click="goManualScheduling">手动调度</button>
			<button class="button-right">自动调度</button>
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
			goManualScheduling() {
				this.$router.push('manualScheduling?id=25');
			}
		}
	}
</script>

<style lang="less" src="@/assets/styles/officialDetail/officialDetail.less" scoped></style>