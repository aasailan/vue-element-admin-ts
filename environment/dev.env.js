const baseEnv = require('./base.env');

const devEnv = { // 开发环境
  ENV: '"development"',
  NODE_ENV: '"development"', // 配置为 production 将会使Vue进入 生产模式，减少很多logger 
  DEBUG_MODE: true,
  API_KEY: '"XXXX-XXXXX-XXXX-XXXX"', 
};

module.exports = Object.assign(devEnv, baseEnv);
                                         