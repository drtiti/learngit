import {fetch} from '@/utils/fetch'

export function getUserLoginSession (options) {
  return fetch({
    url: '/demo/getUserSession',
    method: 'post',
    data: 'body=' + encodeURIComponent(options)
  })
}

export function demoFunc (data) {
  return fetch({
    url: '/demo/stringtest',
    method: 'post',
    data: 'body=' + encodeURIComponent(data)
  })
}
