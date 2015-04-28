(function(root) {

  function isBoolean(v) {
    return Object.prototype.toString.call(v) === '[object Boolean]';
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isBoolean;
    }
    exports.isBoolean = isBoolean;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isBoolean;
    });
  } else {
    root.isBoolean = isBoolean;
  }

})(this);

