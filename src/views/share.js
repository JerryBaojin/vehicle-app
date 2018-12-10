export default {
	data() {
		return {}
	},
	components: {

	},
	methods: {
		back() {
			this.$router.goBack();
		},
		loginOut() {
			this.$MessageBox.confirm('确定要退出当前账号?').then(action => {
				this.$router.push('/login');
			}).catch(()=> {
//				console.log('操作取消')
			})
		}
	}
}