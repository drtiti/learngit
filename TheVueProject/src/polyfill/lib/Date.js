// Date polyfill file for grms coder...
// Do not use '=>' in this file because 'this' will not point to the object who is using it.
/* eslint-disable no-extend-native */
if (!Date.prototype.addMilliseconds) {
  /**
   * 增减毫秒
   * @param {number} ms 毫秒数，可以为负
   */
  Date.prototype.addMilliseconds = function (ms) {
    return this.setMilliseconds(this.getMilliseconds() + ms)
  }
}

if (!Date.prototype.addSeconds) {
  /**
   * 增减秒
   * @param {number} s 秒数，可以为负
   */
  Date.prototype.addSeconds = function (s) {
    return this.setSeconds(this.getSeconds() + s)
  }
}

if (!Date.prototype.addMinutes) {
  /**
   * 增减分
   * @param {number} m 分数，可以为负
   */
  Date.prototype.addMinutes = function (m) {
    return this.setMinutes(this.getMinutes() + m)
  }
}

if (!Date.prototype.addHours) {
  /**
   * 增减时
   * @param {number} h 小时数，可以为负
   */
  Date.prototype.addHours = function (h) {
    return this.setHours(this.getHours() + h)
  }
}

if (!Date.prototype.addDays) {
  /**
   * 增减天
   * @param {number} d 天数，可以为负
   */
  Date.prototype.addDays = function (d) {
    return this.setDate(this.getDate() + d)
  }
}

if (!Date.prototype.addWeeks) {
  /**
   * 增减周
   * @param {number} w 周数，可以为负
   */
  Date.prototype.addWeeks = function (w) {
    return this.addDays(w * 7)
  }
}

if (!Date.prototype.addMonths) {
  /**
   * 增减月
   * @param {number} m 月数，可以为负
   */
  Date.prototype.addMonths = function (m) {
    return this.setMonth(this.getMonth() + m)
  }
}

if (!Date.prototype.addYears) {
  /**
   * 增减年
   * @param {number} y 年数，可以为负
   */
  Date.prototype.addYears = function (y) {
    return this.setFullYear(this.getFullYear() + y)
  }
}

if (!Date.prototype.toUTCDateString) {
  /**
   * 返回UTC时间格式字符串
   * @return {String} YYYY-MM-DD hh:mm:ss
   */
  Date.prototype.toUTCDateString = function () {
    return this.getUTCFullYear() +
      '-' + `${this.getUTCMonth() + 1}`.fillZero(2) +
      '-' + `${this.getUTCDate()}`.fillZero(2) +
      ' ' + `${this.getUTCHours()}`.fillZero(2) +
      ':' + `${this.getUTCMinutes()}`.fillZero(2) +
      ':' + `${this.getUTCSeconds()}`.fillZero(2)
  }
}

if (!Date.prototype.toDateStr) {
  /**
   * 返回时间格式字符串
   * @return {String} YYYY-MM-DD hh:mm:ss
   */
  Date.prototype.toDateStr = function () {
    return this.getFullYear() +
      '-' + `${this.getMonth() + 1}`.fillZero(2) +
      '-' + `${this.getDate()}`.fillZero(2) +
      ' ' + `${this.getHours()}`.fillZero(2) +
      ':' + `${this.getMinutes()}`.fillZero(2) +
      ':' + `${this.getSeconds()}`.fillZero(2)
  }
}
