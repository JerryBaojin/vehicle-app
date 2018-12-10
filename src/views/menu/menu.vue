<template>
	<div class="body-wrap">
		<mt-header fixed title="功能菜单">
			<mt-button slot="right" @click="loginOut">
				<img class="header-img" src="../../../static/imgs/home/tuichu.png"/>
			</mt-button>
		</mt-header>
		<div class="wrap-top">
			<div class="wrap-title">车辆运行调度</div>
			<div class="list-wrap">
				<ul>
					<li id="officalVehicle" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/guwuyongche@2x.png"/>
						<p>公务用车申请</p>
					</li>
					<li id="productionVehicle" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/shengchanyongche@2x.png"/>
						<p>生产用车申请</p>
					</li>
					<li id="applicationRecord" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/shenqingjilu@2x.png"/>
						<p>申请记录</p>
					</li>
					<li id="vehicleApproval"  @click="goRouter($event)">
						<img src="../../../static/imgs/menu/shenpi@2x.png"/>
						<p>用车审批</p>
					</li>
					<li id="vehicleScheduling" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/cheliangdiaodu@2x.png"/>
						<p>车辆调度</p>
					</li>
					<li id="registration" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/guidui2x.png"/>
						<p>归队登记</p>
					</li>
					<li id="evaluate" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/yongche@2x.png"/>
						<p>用车服务评价</p>
					</li>
					<li id="diligentFrugal" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/sanqinsanjian@2x.png"/>
						<p>三勤三检</p>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="wrap-top">
			<div class="wrap-title">车辆信息录入管理</div>
			<div class="list-wrap">
				<ul>
					<li id="refueling" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/jiayou@2x.png"/>
						<p>加油信息</p>
					</li>
					<li id="maintenance" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/weixiu@2x.png"/>
						<p>维修信息</p>
					</li>
					<li id="upkeep" @click="goRouter($event)">
						<img src="../../../static/imgs/menu/baoyang@2x.png"/>
						<p>保养信息</p>
					</li>
					<li></li>					
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
	import share from '../share';
	export default {
		name: 'menus',
		data() {
			return {
				
			}
		},
		mixins: [share],
		methods: {
			//路由跳转
			goRouter(event) {				
				let pathRouter = event.currentTarget.getAttribute('id');
				this.$router.push(`/${pathRouter}`);
			}
		},
		created() {
//			console.log('这是menu页面')
		}
	}
</script>

<style lang="less" src="@/assets/styles/menu/menu.less" scoped></style>