const baseEnv = require('./base.env');

/**
 * Vue 源码会根据 process.env.NODE_ENV 是否等于 'production' 来决定是否打开生产环境，默认为开发环境
 * 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
 * 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
 */
const proEnv = { // 生产环境
  ENV: '"production"',
  NODE_ENV: '"production"',
  DEBUG_MODE: false,
  API_KEY: '"XXXX-XXXXX-XXXX-XXXX"',
};

module.exports = Object.assign(proEnv, baseEnv);