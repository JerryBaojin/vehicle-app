// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import axios from 'axios';
//import qs from 'qs';
import wsCache from 'web-storage-cache';
import VueBus from 'vue-bus';
import FastClick from 'fastclick';
import $ from 'jquery';
import VueAMap from 'vue-amap';
//import AMapUI from 'AMapUI';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: "c3b7ff507e473471907fbcb6d6a1a5c2",
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ]
});

import { Header, TabItem, Button, Cell, Field, Toast, Popup, MessageBox  } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);
Vue.component(Popup.name, Popup);
Vue.component(Toast.name, Toast);

import { List, PullRefresh } from 'vant';
Vue.use(List);
Vue.use(PullRefresh);

FastClick.attach(document.body);
FastClick.prototype.focus = function(targetElement) {
	targetElement.focus();
};

Vue.prototype.$axios = axios;
//Vue.prototype.$qs = qs;
Vue.prototype.$wsCache = new wsCache();
Vue.prototype.$toast = Toast;
Vue.prototype.$MessageBox = MessageBox;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
