
// 新建一个实例对象, 把兼容函数定义到$中, 以便统一调用
let $ = new nobyda();

// 读取几鸡签到脚本所使用的Cookie
let cookie = $.read('CookieJJ');

// 预留的空对象, 便于函数之间读取数据
let user = {};

(async function() { // 立即运行的匿名异步函数
	// 使用await关键字声明, 表示以同步方式执行异步函数, 可以简单理解为顺序执行
	await Promise.all([ //该方法用于将多个实例包装成一个新的实例, 可以简单理解为同时调用函数, 以进一步提高执行速度
		GetCheckin(), 
		//ListProduct() //查询商品函数
	]);
	//await ExchangeProduct(); //上面的查询都完成后, 则执行抢购
	$.done(); //抢购完成后调用Surge、QX内部特有的函数, 用于退出脚本执行
})();

function GetCheckin() {
	console.log(`\ncode: ${cookie}`);
	const checkinUrl = {
		url: 'https://j05.space/user/checkin',
		headers: { //请求头
			'Cookie': cookie //用户鉴权Cookie
		}
	}
	return new Promise((resolve) => { //主函数返回Promise实例对象, 以便后续调用时可以实现顺序执行异步函数
		$.post(checkinUrl, (error, resp, data) => { //使用post请求查询, 再使用回调函数处理返回的结果
			try { //使用try方法捕获可能出现的代码异常
				if (error) {
					throw new Error(error); //如果请求失败, 例如无法联网, 则抛出一个异常
				} else {
					//const body = JSON.parse(data); //解析响应体json并转化为对象
					console.log(`\ncode: ${data}`);
					// if (body.code == 0 && body.data) { //如果响应体为预期格式
					// 	user.ret = parseInt(body.data.ret); //把查询的积分赋值到全局变量user中
                    //     user.msg = parseInt(body.data.msg);
					// 	console.log(`\ncode: ${body.data.ret}`); //打印日志
                    //     console.log(`\msg: ${body.data.msg}`); //打印日志
                    //     $.notify('几鸡签到', '', `签到了"${user.msg}"流量`);
					// } else { //否则抛出一个异常
					// 	throw new Error(body.msg || data);
					// }
				}
			} catch (e) { //接住try代码块中抛出的异常, 并打印日志
				console.log(`\n查询积分: 失败\n出现错误: ${e.message}`);
			} finally { //finally语句在try和catch之后无论有无异常都会执行
				resolve(); //异步操作成功时调用, 将Promise对象的状态标记为"成功", 表示已完成查询积分
			}
		})
	})
}

// const $ = new nobyda(); 
// 发送一个通知: $.notify('title', 'subtitle', 'message')
// 持久化读取: $.read('Key')
// POST请求: $.post(url<Object>,callback<Function>)

function nobyda() {
	const isSurge = typeof $httpClient != "undefined";
	const isQuanX = typeof $task != "undefined";
	const isNode = typeof require == "function";
	const node = (() => {
		if (isNode) {
			const request = require('request');
			return {
				request
			}
		} else {
			return null;
		}
	})()
	const adapterStatus = (response) => {
		if (response) {
			if (response.status) {
				response["statusCode"] = response.status
			} else if (response.statusCode) {
				response["status"] = response.statusCode
			}
		}
		return response
	}
	this.read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key)
		if (isSurge) return $persistentStore.read(key)
	}
	this.notify = (title, subtitle, message) => {
		if (isQuanX) $notify(title, subtitle, message)
		if (isSurge) $notification.post(title, subtitle, message)
		if (isNode) console.log(`${title}\n${subtitle}\n${message}`)
	}
	this.post = (options, callback) => {
		options.headers['User-Agent'] = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/609.3.5.0.2 (KHTML, like Gecko) Mobile/17G80 BiliApp/822 mobi_app/ios_comic channel/AppStore BiliComic/822'
		options.headers['Content-Type'] = 'Content-Type: application/x-www-form-urlencoded'
		if (isQuanX) {
			if (typeof options == "string") options = {
				url: options,
				toString: function() {return ( `(${this.url}, ${this.headers})`)},
				toJSON: function() {return this.toString}
			}
			console.log(`\ncode: ${options.url}`);
			console.log(`\ncode: ${options.headers}`);
			options["method"] = "POST"
			$task.fetch(options).then(response => {
				callback(null, adapterStatus(response), response.body)
			}, reason => callback(reason.error, null, null))
		}
		if (isSurge) {
			options.headers['X-Surge-Skip-Scripting'] = false
			$httpClient.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
		if (isNode) {
			node.request.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	this.done = () => {
		if (isQuanX || isSurge) {
			$done()
		}
	}
};