import axios from 'axios'

const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  setTimeout: 5000
})

export default request
