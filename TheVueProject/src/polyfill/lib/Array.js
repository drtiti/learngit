// Array polyfill file for crms coder...
// Do not use '=>' in this file because 'this' will not point to the object who is using it.
/* eslint-disable no-extend-native */
if (!Array.prototype.first) {
  /**
   * 返回数组的第一个元素
   * @return {[type]} [description]
   */
  Array.prototype.first = function () {
    return this[0]
  }
}

if (!Array.prototype.forEach) {
  /**
   * polyfill IE9以下支持forEach
   * @param  {Function} callback 回调函数
   * @param  {[type]}   thisArg  [description]
   * @return {[type]}            [description]
   */
  Array.prototype.forEach = function (callback, thisArg) {
    let T, K
    if (!this) {
      throw new TypeError('this is null or undefined')
    }
    let O = Object(this)
    let len = O.length >>> 0
    if ({}.toString.call(callback) !== '[object Function]') {
      throw new TypeError(`${callback} is not a function`)
    }
    if (thisArg) {
      T = thisArg
    }
    K = 0
    while (K < len) {
      let kValue
      if (K in O) {
        kValue = O[K]
        callback.call(T, kValue, K, O)
      }
      K++
    }
  }
}

if (!Array.prototype.contains) {
  /**
   * 判断数组中是否包含某个元素
   * @param  {[type]} obj               要匹配的元素
   * @param  {function} compareFunction 指定按某种规则判断是否包含的函数
   * @return {boolean}                  [description]
   */
  Array.prototype.contains = function (obj, compareFunction) {
    let cf = (o1, o2) => {
      return (o1 === o2)
    }
    if (compareFunction) {
      cf = compareFunction
    }
    if ({}.toString.call(cf) !== '[object Function]') {
      throw new TypeError(`${cf} is not a function`)
    }

    let i = this.length
    while (i--) {
      if (cf(this[i], obj)) {
        return true
      }
    }

    return false
  }
}
