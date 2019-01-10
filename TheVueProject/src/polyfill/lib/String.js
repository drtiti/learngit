// String polyfill file for grms coder...
// Do not use '=>' in this file because 'this' will not point to the object who is using it.
/* eslint-disable no-extend-native */
/* eslint-disable no-undef */
if (!String.prototype.fillZero) {
  /**
   * 以在字符串前补0的方式返回指定长度的字符串
   * @param  {Number} size 指定字符串长度
   * @param  {Boolean} after 是否在字符串后面补0
   * @return {[type]}      [description]
   */
  String.prototype.fillZero = function (size, after) {
    if (this.length > size) {
      return this.toString()
    }
    if (after === true) {
      return this + new Array(size + 1 - this.length).join('0')
    }
    return new Array(size + 1 - this.length).join('0') + this
  }
}

if (!String.prototype.compareIgnoreCase) {
  /**
   * 比较两个字符串是否相等，忽略大小写
   * @param  {[type]} str [description]
   * @return {boolean}    返回 true or false
   */
  String.prototype.compareIgnoreCase = function (str) {
    return (this === str) || (this !== null && str !== null &&
      this.toUpperCase().toLowerCase() === str.toUpperCase().toLowerCase())
  }
}

if (!String.prototype.globalReplace) {
  /**
   * 在字符串中用一些字符全局替换另一些字符
   * @param  {string} ss  被替换的文本
   * @param  {string} ds  替换文本或生产替换文本的函数
   * @return {string}     返回一个被全局替换后的新字符串
   */
  String.prototype.globalReplace = function (ss, ds) {
    let re = new RegExp(ss.replace(/\\\\/g, '\\\\\\\\'), 'g')
    return this.replace(re, ds)
  }
}

if (!String.prototype.capitalize) {
  /**
   * 仅首字母大写
   * @return {string}
   */
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.substr(1).toLowerCase()
  }
}

if (!String.prototype.toArray) {
  /**
   * 将字符串转换为字符数组
   * @param  {number} size  每个子字符串的长度
   * @return {array}
   */
  String.prototype.toArray = function (size) {
    let arr = []
    let len = arr.length
    while (size * len < this.length) {
      arr.push(this.substring(size * len, size * len + size))
      len = arr.length
    }
    return arr
  }
}

if (!String.prototype.toBoolean) {
  /**
   * 将字符串转换为布尔值
   * 1和true均返回true, 否则返回false
   * @return {boolean}
   */
  String.prototype.toBoolean = function () {
    switch (this.toLowerCase()) {
      case '1':
      case 'true':
      case true: return true
      default: return false
    }
  }
}

if (!String.prototype.parseXML) {
  /**
   * 将xml字符串解析为xml文档
   * @return {XML} xml文档
   */
  String.prototype.parseXML = function () {
    let xml, tmp
    try {
      if (window.DOMParser) {
        tmp = new DOMParser()
        xml = tmp.parseFromString(this, 'text/xml')
      } else {
        xml = new ActiveXObject('Microsoft.XMLDOM')
        xml.async = 'false'
        xml.loadXML(this)
      }
    } catch (e) {
      xml = undefined
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
      throw new Error(`Invalid XML: ${this}`)
    }
    return xml
  }
}

if (!String.prototype.countSubstr) {
  /**
   * 判断子字符串在字符串中出现的次数
   * @param  {[type]} substr 子字符串
   * @param  {[type]} ignore 是否忽略大小写
   * @return {[type]} count  次数
   */
  String.prototype.countSubstr = function (substr, ignore) {
    let count, reg
    if (ignore === true) {
      reg = new RegExp(substr, 'gi')
    } else {
      reg = new RegExp(substr, 'g')
    }
    if (this.match(reg) === null) {
      count = 0
    } else {
      count = this.match(reg).length
    }
    return count
  }
}

if (!String.prototype.toISOString) {
  /**
   * 将时间格式字符串转为ISO时间格式字符串
   * 1. YYYY
   * 2. YYYY-MM
   * 3. YYYY-MM-DD
   * 4. YYYY-MM-DD hh
   * 5. YYYY-MM-DD hh:mm
   * 6. YYYY-MM-DD hh:mm:ss
   * 7. YYYY-MM-DD hh:mm:ss.sss
   */
  String.prototype.toISOString = function (offset) {
    let mdhmss = '-01-01T00:00:00.000'
    let dhmss = '-01T00:00:00.000'
    let hmss = 'T00:00:00.000'
    let mss = ':00:00.000'
    let ss = ':00.000'
    let s = '.000'
    let off = '+'
    let set = '00:00'
    if (offset && offset > 0) {
      off = '-'
    }
    if (offset) {
      let os = Math.abs(offset)
      set = `${Math.floor(os / 60)}`.fillZero(2) + ':' + `${os % 60}`.fillZero(2)
    }
    let dateString = this.trim().replace(' ', 'T')
    if (dateString.countSubstr('-') === 0) {
      dateString = dateString + mdhmss
    } else if (dateString.countSubstr('-') === 1) {
      dateString = dateString + dhmss
    } else if (dateString.countSubstr('T') === 0) {
      dateString = dateString + hmss
    } else if (dateString.countSubstr(':') === 0) {
      dateString = dateString + mss
    } else if (dateString.countSubstr(':') === 1) {
      dateString = dateString + ss
    } else if (dateString.countSubstr('.') === 0) {
      dateString = dateString + s
    }
    return dateString + off + set
  }
}

if (!String.prototype.toAmountString) {
  /**
   * 将金额字符串前后补0到统一位数
   * @return {String} [description]
   */
  String.prototype.toAmountString = function () {
    let intLen = 21
    let decLen = 10
    if (this.indexOf('.') === -1) {
      return this.fillZero(intLen) + '.'.fillZero(decLen, true)
    }
    return this.substring(0, this.indexOf('.')).fillZero(intLen) + this.substring(this.indexOf('.')).fillZero(decLen, true)
  }
}
