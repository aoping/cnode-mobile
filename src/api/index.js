import axios from '@/plugins/axios';
import config from '@/config'

export function getTopics(
  page = 1,
  tab = 'all'
) {
  return axios.get(`/topics?limit=${config.PAGENUM}&mdrender=true&page=${page}&tab=${tab}`)
}

export function getTopics2() {
  return axios.get("/topics?page=1&limit=20&tab=good&mdrender=true")
}
