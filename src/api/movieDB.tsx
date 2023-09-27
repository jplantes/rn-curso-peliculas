import axios from 'axios'

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7a336a4f88b6f27dea5b04ce9d42667e',
    language: 'es-ES'
  }
})

export default movieDB