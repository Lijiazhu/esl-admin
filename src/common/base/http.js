// import Vue from 'vue'
import axios from 'axios'
import API from '@/config/netApiConfig'
import store from '@/store'
import router from '@/router'
import Base64 from '@/common/utils/base64'
import config from '@/config'

export const http = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

// 请求拦截
http.interceptors.request.use(config => {
  // NProgress.start()
  const token = store.state.user.token
  if (token && config.url !== API.LOGIN) {
    config.headers.Authorization = 'Basic ' + Base64.encode(token + ':' + (Date.now() / 1000 | 0) + ':v1')
  }

  if (config.method === 'get') {

  } else {
    if (config.data) {
      config.data = JSON.stringify(config.data)
    }
  }
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截
http.interceptors.response.use(res => {
  const data = res.data
  if (typeof data === 'undefined') {
    return Promise.reject(data)
  }

  return data
}, err => {
  // NProgress.done()
  // 根据url做区别 => err.config.url，状态码 => err.response.status
  if (err.config.url === config.baseURL + API.LOGIN && err.response.status === 401) {
    return Promise.resolve(err.response)
  }

  if (err.response.status === 498) {
    store.dispatch('Logout')

    // 已经在登录页则不做处理
    if (router.app.$route.path !== '/login') {
      router.replace({
        name: 'login',
        query: {
          back: router.app.$route.fullPath
        }
      })
    }
    return
  }

  return Promise.reject(err.response)
})

export default http
