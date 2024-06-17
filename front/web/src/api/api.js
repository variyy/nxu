import axiosInstance from './index'

const axios = axiosInstance

// 登录认证
export const loginapi = (loginForm) => {
  return axios.post(
    `/user/login`,
    loginForm
  )
}

// 注册
export const registerapi = (registerForm) => {
  return axios.post(
    `/api/users/register/`,
    registerForm
  )
}

// 监测节点IP查询
export const ipquery = () => {
  return axios.post(
    `/api/usertestlog/ipquery/`
  )
}

// 普通测试网页不带CDN
export const webwithoutcdntest = (testForm) => {
  return axios.post(
    `/api/usertestlog/webwithoutcdntest/`,
    testForm
  )
}

// 普通测试网页带CDN
export const webwithcdntest = (testForm) => {
  return axios.post(
    `/api/usertestlog/webwithcdntest/`,
    testForm
  )
}

// 普通测试流媒体
export const webvideotest = (testForm) => {
  return axios.post(
    `/api/usertestlog/webvideotest/`,
    testForm
  )
}

// 普通测试即时通讯
export const webmessagetest = (testForm) => {
  return axios.post(
    `/api/usertestlog/webmessagetest/`,
    testForm
  )
}

// 批量测试
export const batchtestapi = (testForm) => {
  return axios.post(
    `/api/usertestlog/batchtest/`,
    testForm
  )
}

// 获取网页不带CDN测试信息
export const getWebwithoutcdn = (testForm) => {
  return axios.post(
    `/api/usertestlog/webwithoutcdn/`,
    testForm
  )
}
// 获取网页带CDN测试信息
export const getWebwithcdn = (testForm) => {
  return axios.post(
    `/api/usertestlog/webwithcdn/`,
    testForm
  )
}
// 获取流媒体测试信息
export const getWebvideo = (testForm) => {
  return axios.post(
    `/api/usertestlog/webvideo/`,
    testForm
  )
}
// 获取即时通讯测试信息
export const getWebmessage = (testForm) => {
  return axios.post(
    `/api/usertestlog/webmessage/`,
    testForm
  )
}
// 用户管理
export const getuserinfo = () => {
  return axios.get(
    `/api/users/userinfo/`
  )
}

// 用户删除
export const deleteapi = (username) => {
  return axios.delete(
    `/api/users/userinfo/`,
    {data: {'username': username}}
  )
}

// 用户修改
export const editapi = (editUserForm) => {
  return axios.post(
    `/api/users/userinfo/`,
    editUserForm
  )
}

// 获取系统日志
export const getSystemlog = (logForm) => {
  return axios.post(
    `/api/users/log/`,
    logForm
  )
}

// 获取测试日志
export const getTestlog = () => {
  return axios.get(
    `/api/usertestlog/usertestlogs/`
  )
}

export const postTestlog = (testId, testTitle, testBody, testStatus, testCreatedate, testAuthor) => {
  return axios.post(
    `/api/usertestlogs/`,
    {
      'id': testId,
      'title': testTitle,
      'body': testBody,
      'status': testStatus,
      'create_date': testCreatedate,
      'author': testAuthor
    }
  )
}
