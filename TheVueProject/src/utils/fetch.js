/**
 * Created by lzt on 2019/1/9.
 */
import axios from 'axios'
import { Message } from 'element-ui'

export function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      timeout: 30000 // 超时
    })
    instance(options)
      .then(response => {
        const res = response.data
        resolve(res)
      })
      .catch(error => {
        Message({
          message: error,
          type: 'error',
          duration: 5 * 1000
        })
        console.log(error) // for debug
        reject(error)
      })
  })
}
