<template>
	<div class="body-wrap">
		<div class="title-wrap">
			<h1>系统登录</h1>
			<h3>测绘地理信息研究院综合信息管理平台</h3>
		</div>
		<div class="login-wrap">
			<mt-cell title="管理员账号">
			  	<input type="text" id="account" v-model="account"/>
			</mt-cell>
			<mt-cell title="登录密码">
			  	<input :type="visible ? 'text' : 'password'" id="password" v-model="password"/>
			  	<img src="../../../static/imgs/login/chakan1.png" v-if="!visible" @click="visible = !visible"/>
			  	<img src="../../../static/imgs/login/chakan2.png" v-if="visible" @click="visible = !visible"/>
			</mt-cell>
		</div>
		<div class="button-wrap">
			<button @click="loginTo">登录</button>
		</div>
		<footer>
			<p>Copynigth © STATE GRID All rights reserved.</p>
			<p>国网安备：131037161</p>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data (){
			return {
				account: '',
				password: '',
				visible: false,
				isClick: true,
			}
		},
		methods: {
			loginTo() {
				this.$router.push('/home');
			}
		}
	}
</script>

<style lang="less" src="@/assets/styles/login/login.less" scoped></style>