const path = require('path');

// Helper functions 根路径
const ROOT = path.resolve(__dirname, '..');

// 传入参数，返回绝对路径
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

exports.root = root;
