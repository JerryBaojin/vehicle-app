<template>
	<div class="body-wrap">
		<mt-header title="维修信息详情" fixed >
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
						<span class="cont-left">维修费用</span>
						<span class="cont-right">300元</span>
					</li>
					<li>
						<span class="cont-left">送修日期</span>
						<span class="cont-right">2018-06-13</span>
					</li>
					<li>
						<span class="cont-left">完修日期</span>
						<span class="cont-right">2018-07-01</span>
					</li>
					<li>
						<span class="cont-left">维修类型</span>
						<span class="cont-right">钣金维修</span>
					</li>
					<li>
						<span class="cont-left">里程</span>
						<span class="cont-right">4362</span>
					</li>
					<li>
						<span class="cont-left">维修地点</span>
						<span class="cont-right">某某某4S店</span>
					</li>
				</ul>				
			</div>			
		</div>
		<div class="message-wrap message-bottom">
			<ul>
				<li>
					<span class="cont-left">维修部位</span>
					<span class="cont-right">左侧车门</span>
				</li>
			</ul>
			<div class="describe-wrap">				
				<div class="describe-left">维修部位说明</div>
				<div class="describe-right">
					<p>由于事故剐蹭导致前保险杠、左侧车门需要进行门钣喷漆！</p>
				</div>			
			</div>			
		</div>
		<div class="message-wrap message-bottom">
			<div class="describe-wrap">				
				<div class="describe-left">单据票据</div>
				<div class="describe-right">
					<p>
						<span class="img-wrap">
							<img src="../../../static/imgs/scroll/touxiang.jpg"/>
						</span>
						<span class="img-wrap">
							<img src="../../../static/imgs/scroll/touxiang.jpg"/>
						</span>
						<span class="img-wrap">
							<img src="../../../static/imgs/scroll/touxiang.jpg"/>
						</span>
					</p>
				</div>			
			</div>			
		</div>
	</div>
</template>

<script>
	import share from '../share';
	export default {
		name: 'maintenanceDetail',
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