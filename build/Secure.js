"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _secureLs = _interopRequireDefault(require("secure-ls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var s = new _secureLs["default"]();
var secure = {
  set: function set(key, value) {
    return new Promise(function (resolve) {
      s.set(key, value);
      resolve();
    });
  },
  get: function get(key) {
    return new Promise(function (resolve) {
      var value = s.get(key) || undefined // To fit standard
      ;
      resolve(value);
    });
  },
  "delete": function _delete(key) {
    return new Promise(function (resolve) {
      s.remove(key);
      resolve();
    });
  }
};
var _default = secure;
exports["default"] = _default;