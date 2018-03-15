;(function(root) {

  function isBoolean(v) {
    if (Boolean.prototype.isPrototypeOf(v)) {
      return true
    }

    return v === false || v === true
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isBoolean
    }
    exports.isBoolean = isBoolean
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isBoolean
    })
  } else {
    root.isBoolean = isBoolean
  }

})(this);

