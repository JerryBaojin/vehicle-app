<template>
	<div class="body-wrap">
		<mt-header title="车辆三勤三检详情" fixed >
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
		</mt-header>
		<div class="message-wrap">
			<div class="content-wrap">
				<ul>
					<li>
						<span class="cont-left">车牌号</span>
						<span class="cont-right">闽D888888</span>
					</li>
					<li>
						<span class="cont-left">车辆信息1</span>
						<span class="cont-right">车辆信息1</span>
					</li>
					<li>
						<span class="cont-left">车辆信息2</span>
						<span class="cont-right">车辆信息2</span>
					</li>
					<li>
						<span class="cont-left">车辆信息3</span>
						<span class="cont-right">车辆信息3</span>
					</li>					
				</ul>				
			</div>			
		</div>
		<div class="message-wrap message-bottom">
			<div class="describe-wrap">				
				<div class="describe-left">检查描述</div>
				<div class="describe-right">
					<p>这是描述内容<br />
					这是描述内容<br />
					这是描述内容<br /></p>
				</div>			
			</div>			
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'diligentFrugalDetail',
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