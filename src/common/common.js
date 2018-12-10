//函数防抖
//定义：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。
//原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。		
/**
 * 防抖函数
 * @param method 事件触发的操作
 * @param delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
export function debounce(method, delay) {
	let timer = null;
	return function() {
		let self = this,
			args = arguments;
		timer && clearTimeout(timer);
		timer = setTimeout(function() {
			method.apply(self, args);
		}, delay)
	}
}

//函数节流
//定义：触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。
//原理：对处理函数进行延时操作，若设定的延时到来之前，再次触发事件，则清除上一次的延时操作定时器，重新定时。
/**
 * 节流函数
 * @param method 事件触发的操作
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 */
export function throttle(method, mustRunDelay) {
	let timer,
		args = arguments,
		start;
	return function loop() {
		let self = this;
		let now = Date.now();
		if(!start) {
			start = now;
		}
		if(timer) {
			clearTimeout(timer);
		}
		if(now - start >= mustRunDelay) {
			method.apply(self, args);
			start = now;
		} else {
			timer = setTimeout(function() {
				loop.apply(self, args);
			}, 50)
		}
	}
}

//初始化滚动条位置
/**
 * @param name 滚动条容器
 * @param scroll 缓存的滚动条位置的值
 */
export function initScroll(name, scroll) {
	name.scrollTop = scroll;
}

//请求接口成功时的状态码
export const ERR_CODE = 0;