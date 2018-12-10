<template>
	<div class="body-wrap">
		<mt-header title="用车服务请假" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">提交评价</mt-button>
		</mt-header>
		<div class="message-wrap">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">用车人</span>
						<span class="cont-right">张三</span>
					</li>
					<li>
						<span class="cont-left">用车人数</span>
						<span class="cont-right">4人</span>
					</li>
					<li>
						<span class="cont-left">驾驶员</span>
						<span class="cont-right">王五</span>
					</li>
					<li>
						<span class="cont-left">车牌号</span>
						<span class="cont-right">闽D888888</span>
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
						<span class="cont-left">归队时间</span>
						<span class="cont-right">2018-06-12 14:50</span>
					</li>
					<li>
						<span class="cont-left">用车类型</span>
						<span class="cont-right">公务用车</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="message-wrap message-bottom">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">服务评价</span>
						<span class="cont-right">非常好</span>
					</li>
					<li>
						<span class="cont-left">评价内容</span>
						<span class="cont-right">暂无评价内容</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="registration-wrap">
			<mt-cell title="服务评价" is-link>
			  	<span>请选择</span>
			</mt-cell>
		</div>
		<div class="textarea-wrap">
			<p class="textarea-title">评价内容</p>
			<mt-field placeholder="请输入评价内容" type="textarea" rows="3"></mt-field>
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'evaluateDetail',
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