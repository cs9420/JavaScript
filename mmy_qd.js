
var $ = new Env('慢慢游社区签到');

//let cookie = $.getval("CookieMMYQD");

// (async function() { // 立即运行的匿名异步函数
// 	// 使用await关键字声明, 表示以同步方式执行异步函数, 可以简单理解为顺序执行
// 	await Promise.all([ //该方法用于将多个实例包装成一个新的实例, 可以简单理解为同时调用函数, 以进一步提高执行速度
// 		getSign(), 
// 		//ListProduct() //查询商品函数
// 	]);
// 	//await ExchangeProduct(); //上面的查询都完成后, 则执行抢购
// 	$.done(); //抢购完成后调用Surge、QX内部特有的函数, 用于退出脚本执行
// })();

getManmanyou()

function getManmanyou() {
	$.post({
    url: 'https://www.manmanyou.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&sign_as=1&inajax=1&formhash=c22e1d56&qdxq=kx&qdmode=3&todaysay=&fastreply=0',
    headers: {
      'Host': 'www.manmanyou.net',
      'Cache-Control': 'max-age=0',
      'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"' ,
      'sec-ch-ua-mobile': '?0' ,
      'Origin': 'https://www.manmanyou.net',
      'Upgrade-Insecure-Requests': '1' ,
      'DNT': '1',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-User': '?1',
      'Sec-Fetch-Dest': 'iframe',
      'Referer': 'https://www.manmanyou.net/forum.php',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7',
      Cookie: 'lz6l_2132_saltkey=X5pfJAaB; lz6l_2132_lastvisit=1625742927; lz6l_2132_visitedfid=113; lz6l_2132_st_p=0%7C1626703488%7C036fd6a0cb3265076bda9cd1329e5f2a; lz6l_2132_viewid=tid_281849; Hm_lvt_bd6dd0a974f09150e0eeb117163aac7b=1625746185,1626703129; lz6l_2132_seccode=52836.c245e5ec61b2573296; lz6l_2132_ulastactivity=6092U1VnJM3d2uQUn2gQGVjKuuwYU8L3ok16ghs1yplKVMoQF7Mx; lz6l_2132_auth=01051aerehdFFUnhaUsdXgb8nxxphK4hvRE7eAnxUMc1LwbjIoNe510IGV6ZSnECiUcn1%2Fkj9S%2FKgT9q3AKcH%2BSRa%2B0; lz6l_2132_lastcheckfeed=328508%7C1626703507; lz6l_2132_newemail=328508%09master9420%40163.com%091626703511; lz6l_2132_resendemail=1626703511; lz6l_2132_noticeTitle=1; lz6l_2132_sid=a9iqQi; lz6l_2132_lip=210.0.158.175%2C1626703655; lz6l_2132_nofavfid=1; lz6l_2132_sendmail=1; lz6l_2132_checkpm=1; Hm_lpvt_bd6dd0a974f09150e0eeb117163aac7b=1626703532; lz6l_2132_lastact=1626703894%09plugin.php%09',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    }
  }, function(error, response, data) {
    if (error && !data) {
      $.log(error);
      $.msg("慢慢游社区签到", "签到请求失败 ‼️‼️", error.stringify)
    } else {
		$.log('', `${data}`)
    //$.log('', `headers ${response.headers}`)
    //$.log('', `statusCode ${response.statusCode}`)
    //$.log('', `status ${response.status}`)
    //$.log('', `body ${response.body}`)
		//$.msg("苹果ID", "", date.getMonth() + 1 + "月" + date.getDate() + "日, 签到成功 🎉")
    //   if (data.match(/(ÒÑÍê³É|\u606d\u559c\u60a8|��̳΢�š��ᰮ�ƽ�)/)) {
    //     $.msg("吾爱破解", "", date.getMonth() + 1 + "月" + date.getDate() + "日, 签到成功 🎉")
    //   } else if (data.match(/(ÄúÒÑ|\u4e0b\u671f\u518d\u6765|>��Ǹ������)/)) {
    //     $.msg("吾爱破解", "", date.getMonth() + 1 + "月" + date.getDate() + "日, 已签过 ⚠️")
    //   } else if (data.match(/(ÏÈµÇÂ¼|\u9700\u8981\u5148\u767b\u5f55|�Ҫ�ȵ�¼���ܼ�)/)) {
    //     $.msg("吾爱破解", "", "签到失败, Cookie失效 ‼️‼️")
    //   } else if (response.statusCode == 403) {
    //     $.msg("吾爱破解", "", "服务器暂停签到 ⚠️")
    //   } else {
    //     $.msg("吾爱破解", "", "脚本待更新 ‼️‼️")
    //   }
    }
    $.done();
  })
}

// https://github.com/chavyleung/scripts/blob/master/Env.js
function Env(name, opts) {
  class Http {
    constructor(env) {
      this.env = env
    }

    send(opts, method = 'GET') {
      opts = typeof opts === 'string' ? { url: opts } : opts
      let sender = this.get
      if (method === 'POST') {
        sender = this.post
      }
      return new Promise((resolve, reject) => {
        sender.call(this, opts, (err, resp, body) => {
          if (err) reject(err)
          else resolve(resp)
        })
      })
    }

    get(opts) {
      return this.send.call(this.env, opts)
    }

    post(opts) {
      return this.send.call(this.env, opts, 'POST')
    }
  }

  return new (class {
    constructor(name, opts) {
      this.name = name
      this.http = new Http(this)
      this.data = null
      this.dataFile = 'box.dat'
      this.logs = []
      this.isMute = false
      this.isNeedRewrite = false
      this.logSeparator = '\n'
      this.startTime = new Date().getTime()
      Object.assign(this, opts)
      this.log('', `🔔${this.name}, 开始!`)
    }

    isNode() {
      return 'undefined' !== typeof module && !!module.exports
    }

    isQuanX() {
      return 'undefined' !== typeof $task
    }

    isSurge() {
      return 'undefined' !== typeof $httpClient && 'undefined' === typeof $loon
    }

    isLoon() {
      return 'undefined' !== typeof $loon
    }

    isShadowrocket() {
      return 'undefined' !== typeof $rocket
    }

    toObj(str, defaultValue = null) {
      try {
        return JSON.parse(str)
      } catch {
        return defaultValue
      }
    }

    toStr(obj, defaultValue = null) {
      try {
        return JSON.stringify(obj)
      } catch {
        return defaultValue
      }
    }

    getjson(key, defaultValue) {
      let json = defaultValue
      const val = this.getdata(key)
      if (val) {
        try {
          json = JSON.parse(this.getdata(key))
        } catch {}
      }
      return json
    }

    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key)
      } catch {
        return false
      }
    }

    getScript(url) {
      return new Promise((resolve) => {
        this.get({ url }, (err, resp, body) => resolve(body))
      })
    }

    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
        let httpapi_timeout = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout')
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
        httpapi_timeout = runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
        const [key, addr] = httpapi.split('@')
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: { script_text: script, mock_type: 'cron', timeout: httpapi_timeout },
          headers: { 'X-Key': key, 'Accept': '*/*' }
        }
        this.post(opts, (err, resp, body) => resolve(body))
      }).catch((e) => this.logErr(e))
    }

    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile ? curDirDataFilePath : rootDirDataFilePath
          try {
            return JSON.parse(this.fs.readFileSync(datPath))
          } catch (e) {
            return {}
          }
        } else return {}
      } else return {}
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(process.cwd(), this.dataFile)
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile = !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        const jsondata = JSON.stringify(this.data)
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata)
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        }
      }
    }

    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result = source
      for (const p of paths) {
        result = Object(result)[p]
        if (result === undefined) {
          return defaultValue
        }
      }
      return result
    }

    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
      path
        .slice(0, -1)
        .reduce((a, c, i) => (Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {})), obj)[
        path[path.length - 1]
      ] = value
      return obj
    }

    getdata(key) {
      let val = this.getval(key)
      // 如果以 @
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objval = objkey ? this.getval(objkey) : ''
        if (objval) {
          try {
            const objedval = JSON.parse(objval)
            val = objedval ? this.lodash_get(objedval, paths, '') : val
          } catch (e) {
            val = ''
          }
        }
      }
      return val
    }

    setdata(val, key) {
      let issuc = false
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objdat = this.getval(objkey)
        const objval = objkey ? (objdat === 'null' ? null : objdat || '{}') : '{}'
        try {
          const objedval = JSON.parse(objval)
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        } catch (e) {
          const objedval = {}
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        }
      } else {
        issuc = this.setval(val, key)
      }
      return issuc
    }

    getval(key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(key)
      } else if (this.isQuanX()) {
        return $prefs.valueForKey(key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        return this.data[key]
      } else {
        return (this.data && this.data[key]) || null
      }
    }

    setval(val, key) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(val, key)
      } else if (this.isQuanX()) {
        return $prefs.setValueForKey(val, key)
      } else if (this.isNode()) {
        this.data = this.loaddata()
        this.data[key] = val
        this.writedata()
        return true
      } else {
        return (this.data && this.data[key]) || null
      }
    }

    initGotEnv(opts) {
      this.got = this.got ? this.got : require('got')
      this.cktough = this.cktough ? this.cktough : require('tough-cookie')
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {}
        if (undefined === opts.headers.Cookie && undefined === opts.cookieJar) {
          opts.cookieJar = this.ckjar
        }
      }
    }

    get(opts, callback = () => {}) {
      if (opts.headers) {
        delete opts.headers['Content-Type']
        delete opts.headers['Content-Length']
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, { 'X-Surge-Skip-Scripting': false })
        }
        $httpClient.get(opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, { hints: false })
        }
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        this.got(opts)
          .on('redirect', (resp, nextOpts) => {
            try {
              if (resp.headers['set-cookie']) {
                const ck = resp.headers['set-cookie'].map(this.cktough.Cookie.parse).toString()
                if (ck) {
                  this.ckjar.setCookieSync(ck, null)
                }
                nextOpts.cookieJar = this.ckjar
              }
            } catch (e) {
              this.logErr(e)
            }
            // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
          })
          .then(
            (resp) => {
              const { statusCode: status, statusCode, headers, body } = resp
              callback(null, { status, statusCode, headers, body }, body)
            },
            (err) => {
              const { message: error, response: resp } = err
              callback(error, resp, resp && resp.body)
            }
          )
      }
    }

    post(opts, callback = () => {}) {
      const method = opts.method ? opts.method.toLocaleLowerCase() : 'post'
      // 如果指定了请求体, 但没指定`Content-Type`, 则自动生成
      if (opts.body && opts.headers && !opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      if (opts.headers) delete opts.headers['Content-Length']
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          opts.headers = opts.headers || {}
          Object.assign(opts.headers, { 'X-Surge-Skip-Scripting': false })
        }
        $httpClient[method](opts, (err, resp, body) => {
          if (!err && resp) {
            resp.body = body
            resp.statusCode = resp.status
          }
          callback(err, resp, body)
        })
      } else if (this.isQuanX()) {
        opts.method = method
        if (this.isNeedRewrite) {
          opts.opts = opts.opts || {}
          Object.assign(opts.opts, { hints: false })
        }
        $.log('', `opts: ${$.toObj(opts)}`)
        $task.fetch(opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => callback(err)
        )
      } else if (this.isNode()) {
        this.initGotEnv(opts)
        const { url, ..._opts } = opts
        this.got[method](url, _opts).then(
          (resp) => {
            const { statusCode: status, statusCode, headers, body } = resp
            callback(null, { status, statusCode, headers, body }, body)
          },
          (err) => {
            const { message: error, response: resp } = err
            callback(error, resp, resp && resp.body)
          }
        )
      }
    }
    /**
     *
     * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
     *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
     * @param {string} fmt 格式化参数
     * @param {number} 可选: 根据指定时间戳返回格式化日期
     *
     */
    time(fmt, ts = null) {
      const date = ts ? new Date(ts) : new Date()
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds()
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (let k in o)
        if (new RegExp('(' + k + ')').test(fmt))
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      return fmt
    }

    /**
     * 系统通知
     *
     * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
     *
     * 示例:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title 标题
     * @param {*} subt 副标题
     * @param {*} desc 通知详情
     * @param {*} opts 通知参数
     *
     */
    msg(title = name, subt = '', desc = '', opts) {
      const toEnvOpts = (rawopts) => {
        if (!rawopts) return rawopts
        if (typeof rawopts === 'string') {
          if (this.isLoon()) return rawopts
          else if (this.isQuanX()) return { 'open-url': rawopts }
          else if (this.isSurge()) return { url: rawopts }
          else return undefined
        } else if (typeof rawopts === 'object') {
          if (this.isLoon()) {
            let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
            let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
            return { openUrl, mediaUrl }
          } else if (this.isQuanX()) {
            let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
            let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
            return { 'open-url': openUrl, 'media-url': mediaUrl }
          } else if (this.isSurge()) {
            let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
            return { url: openUrl }
          }
        } else {
          return undefined
        }
      }
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(title, subt, desc, toEnvOpts(opts))
        } else if (this.isQuanX()) {
          $notify(title, subt, desc, toEnvOpts(opts))
        }
      }
      if (!this.isMuteLog) {
        let logs = ['', '==============📣系统通知📣==============']
        logs.push(title)
        subt ? logs.push(subt) : ''
        desc ? logs.push(desc) : ''
        console.log(logs.join('\n'))
        this.logs = this.logs.concat(logs)
      }
    }

    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs]
      }
      console.log(logs.join(this.logSeparator))
    }

    logErr(err, msg) {
      const isPrintSack = !this.isSurge() && !this.isQuanX() && !this.isLoon()
      if (!isPrintSack) {
        this.log('', `❗️${this.name}, 错误!`, err)
      } else {
        this.log('', `❗️${this.name}, 错误!`, err.stack)
      }
    }

    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }

    done(val = {}) {
      const endTime = new Date().getTime()
      const costTime = (endTime - this.startTime) / 1000
      this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
      this.log()
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(val)
      }
    }
  })(name, opts)
}