import axios from '@/plugins/axios';
import config from '@/config'

export function getTopics(
  page = 1,
  tab = 'all'
) {
  return axios.get(`/topics?limit=${config.PAGENUM}&mdrender=true&page=${page}&tab=${tab}`)
}

export function getTopicDetail(id) {
  return axios.get(`/topic/${id}`)
}


export function accesstoken(accesstoken) {
  return axios.post('/accesstoken', {
    accesstoken
  })
}
