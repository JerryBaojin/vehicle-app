<template>
	<div class="body-wrap">
		<mt-header title="生产用车申请" fixed >
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>
		<div class="message-wrap">
			<div class="message-title">
				<span class="title-left">生产用车申请</span>
				<span class="success state-right">已通过</span>
			</div>
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">申请单位</span>
						<span class="cont-right">某某某单位</span>
					</li>
					<li>
						<span class="cont-left">申请部门</span>
						<span class="cont-right">某某某部门</span>
					</li>
					<li>
						<span class="cont-left">申请时间</span>
						<span class="cont-right">2018-03-16</span>
					</li>
					<li>
						<span class="cont-left">申请类型</span>
						<span class="cont-right">公务用车申请</span>
					</li>
					<li>
						<span class="cont-left">申请人</span>
						<span class="cont-right">张三</span>
					</li>
					<li>
						<span class="cont-left">申请电话</span>
						<span class="cont-right">13655971886</span>
					</li>
					<li>
						<span class="cont-left">用车人</span>
						<span class="cont-right">张三</span>
					</li>
					<li>
						<span class="cont-left">用车电话</span>
						<span class="cont-right">13655971886</span>
					</li>
					<li>
						<span class="cont-left">出行人数</span>
						<span class="cont-right">4人</span>
					</li>
					<li>
						<span class="cont-left">出车原因</span>
						<span class="cont-right">外派出差</span>
					</li>
					<li>
						<span class="cont-left">出发地点</span>
						<span class="cont-right">厦门</span>
					</li>
					<li>
						<span class="cont-left">目的地</span>
						<span class="cont-right">泉州</span>
					</li>
					<li>
						<span class="cont-left">备注信息</span>
						<span class="cont-right">暂无备注</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="process-wrap">
			<div class="message-title bottom-wrap">
				<span class="title-left">审批流程</span>
			</div>
			<div class="cont-process">
				<ul>
					<li>
						<div class="process-left">
							<span class="img-wrap">
								<img src="../../../static/imgs/scroll/touxiang.jpg"/>
							</span>
							<span class="process-center">我 </span>
							<span class="process-center">发起申请</span>							
						</div>
						<div class="time-wrap">06.14 08:00</div>
					</li>
					<li>
						<div class="process-left">
							<span class="img-wrap">
								<img src="../../../static/imgs/scroll/touxiang.jpg"/>
							</span>
							<span class="process-center">某领导 </span>
							<span class="process-center success">已同意</span>							
						</div>
						<div class="time-wrap">06.14 08:00</div>
					</li>
				</ul>
			</div>
		</div>
		<!--<div class="button-wrap">
			<button>撤销申请</button>
		</div>-->
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'productionDetail',
		data() {
			return {
				
			}
		},
		mixins: [share]
	}
</script>

<style lang="less" src="@/assets/styles/officialDetail/officialDetail.less" scoped></style>