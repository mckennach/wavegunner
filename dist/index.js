"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
Object.defineProperty(exports, "WaveGunner", {
  enumerable: true,
  get: function get() {
    return _wavegunner.default;
  }
});
var _wavegunner = _interopRequireDefault(require("./wavegunner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Test = () => {
  console.log('test');
};
exports.Test = Test;
