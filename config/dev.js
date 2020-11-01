module.exports = {
  env: {
    NODE_ENV: JSON.stringify('development')
  },
  terser:{
    enable: false,
  },
  csso:{
    enable:false
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
