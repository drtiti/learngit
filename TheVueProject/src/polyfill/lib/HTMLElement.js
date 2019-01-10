// HTML DOM polyfill file for crms coder...
// Do not use '=>' in this file because 'this' will not point to the object who is using it.
/* eslint-disable no-extend-native */
if (!('classList' in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function () {
      let self = this
      function update (fn) {
        return function (value) {
          let classes = self.className.split(/\s+/g)
          let index = classes.indexOf(value)
          fn(classes, index, value)
          self.className = classes.join(' ')
        }
      }
      return {
        add: update(function (classes, index, value) {
          if (!~index) {
            classes.push(value)
          }
        }),
        remove: update(function (classes, index) {
          if (~index) {
            classes.splice(index, 1)
          }
        }),
        toggle: update(function (classes, index, value) {
          if (~index) {
            classes.splice(index, 1)
          } else {
            classes.push(value)
          }
        }),
        contains: function (value) {
          return !!~self.className.split(/\s+/g).indexOf(value)
        },
        item: function (i) {
          return self.className.split(/\s+/g)[i] || null
        }
      }
    }
  })
}
