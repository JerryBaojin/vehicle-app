<template>
	<div class="body-wrap">
		<mt-header title="加油信息详情" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>
		<div class="message-wrap">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">油料类型</span>
						<span class="cont-right">93#汽油</span>
					</li>
					<li>
						<span class="cont-left">加油费用</span>
						<span class="cont-right">300元</span>
					</li>
					<li>
						<span class="cont-left">加油时间</span>
						<span class="cont-right">2018-06-13</span>
					</li>
					<li>
						<span class="cont-left">加油地点</span>
						<span class="cont-right">福建省厦门市某某加油站</span>
					</li>
					<li>
						<span class="cont-left">加油量</span>
						<span class="cont-right">32.00L</span>
					</li>
					<li>
						<span class="cont-left">当前里程数</span>
						<span class="cont-right">3266KM</span>
					</li>
					<li>
						<span class="cont-left">支付方式</span>
						<span class="cont-right">现金</span>
					</li>
					<li>
						<span class="cont-left">车牌号</span>
						<span class="cont-right">闽D888888</span>
					</li>
					<li>
						<span class="cont-left">备注</span>
						<span class="cont-right">暂无备注信息</span>
					</li>
				</ul>				
			</div>			
		</div>		
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'refuelingDetail',
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