function wxPromisify(functionName,params){
    return new Promise((resolve,reject)=>{
        wx[functionName]({
            ...params,
            success:res=>resolve(res),
            fail:err=>reject(err)
        })
    })
}

/**
 * 登录
 */
function login(params={}) {
    return wxPromisify('login', params);
  }
  
  /**
   * 获取用户信息
   */
  function getUserInfo(params={}) {
    return wxPromisify('getUserInfo', params);
  }
  
  /**
   * 获取用户权限
   */
  function getSetting(params={}) {
    return wxPromisify('getSetting', params);
  }
  
   export default {
    login,
    getUserInfo,
    getSetting
  }