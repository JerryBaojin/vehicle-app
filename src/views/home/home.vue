<template>
	<div class="body-wrap">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		
		
		<div class="tabBar">
			<router-link v-for="(item,index) in tabData" :key="item.url" :to="item.url" replace>
				<div v-if="$route.path.indexOf(item.url) < 0">
					<img :src="tabData[index].noActive"> 
					<p>{{ item.name }}</p>
				</div>
				<div v-if="$route.path.indexOf(item.url) >= 0">
					<img :src="tabData[index].active"> 
					<p>{{ item.name }}</p>
				</div>
			</router-link>			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data () {
			return {
                tabData: [{
                	name: '功能菜单',
                	url: '/home',
                	active: require('../../../static/imgs/home/caidan2.png'),
                	noActive: require('../../../static/imgs/home/caidan1.png')
                },{
                	name: '预警提醒',
                	url: '/warning',
                	active: require('../../../static/imgs/home/yujing2.png'),
                	noActive:require('../../../static/imgs/home/yujing1.png')
                }]
			}
		},
		created() {
			
		}
	}
</script>

<style lang="less" src="@/assets/styles/home/home.less" scoped></style>