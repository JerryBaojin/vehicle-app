<template>
	<div class="map-body-wrap">
		<mt-header title="选择地址" fixed>
			<mt-button icon="back" slot="left" @click="back">返回</mt-button>
			<mt-button slot="right">确定</mt-button>
		</mt-header>
		<div class="map-wrap">
			<el-amap-search-box class="search-box" :on-search-result="onSearchResult">
			</el-amap-search-box>
			<el-amap vid="amap" :zoom="zoom" class="amap-demo" :center="center" :amapManager="amapManager">
				<el-amap-marker vid="component-marker" :position="center" :animation="animation" :zIndex="zIndex"></el-amap-marker>
			</el-amap>
		</div>
	</div>
</template>

<script>
	import { AMapManager } from "vue-amap";
	let amapManager = new AMapManager();
	import share from '../share';
	export default {
		name: 'mapView',
		data() {
			return {
				zoom: 16,
				center: [0, 0], //点标记坐标
				lng: 0,
				lat: 0,
				address: '', //定位之后的地址
				amapManager,
				animation: 'AMAP_ANIMATION_BOUNCE', //点标记动画效果
				zIndex: 9999, //点标记层级
				result: []
			}
		},
		mixins: [share],
		methods: {
			startPosition() {
				let _this = this;
				let map = this.amapManager.getMap();
				let geolocation;
				map.plugin('AMap.Geolocation', function() {
					geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过10秒后停止定位，默认：无穷大
						maximumAge: 0, //定位结果缓存0毫秒，默认：0
						convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
						showButton: true, //显示定位按钮，默认：true
						buttonPosition: 'RB', //定位按钮停靠位置，默认：'LB'，左下角
						buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
						showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
						showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
						panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
						zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
						extensions: 'all'
					});
					map.addControl(geolocation);
					geolocation.getCurrentPosition();
					AMap.event.addListener(geolocation, 'complete', _this.complete); //返回定位信息
					AMap.event.addListener(geolocation, 'error', _this.error); //返回定位出错信息
				});
			},
			//返回定位信息
			complete(data) {
				this.address = data.formattedAddress;
				this.lng = data.position.lng;
				this.lat = data.position.lat;
				this.$nextTick(() => {
					this.center = [data.position.lng, data.position.lat];
				})
			},
			//返回定位出错信息
			error(data) {
				console.log(JSON.stringify(data));
			},
			onSearchResult(pois) {
				console.log(pois)
				this.result = pois;
				let latSum = 0;
				let lngSum = 0;
				if(pois.length > 0) {
					pois.forEach(poi => {
						let {
							lng,
							lat
						} = poi;
						lngSum += lng;
						latSum += lat;
					});
					let center = {
						lng: lngSum / pois.length,
						lat: latSum / pois.length
					};
					this.center = [center.lng, center.lat];
				}
			}
		},
		created() {

		},
		mounted() {
			this.$nextTick(() => {
				this.startPosition();
			})
		}
	}
</script>

<style lang="less" src="@/assets/styles/mapView/mapView.less"></style>