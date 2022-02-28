import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getAFewRandomJokes(term: String = '') {
    return AxiosInstance.get(`/search?term=${term}`)
  },
}
