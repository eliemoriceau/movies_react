import * as axios from 'axios'

const apiMovie = axios.create({
    baseURL: 'http://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzkxOGUzMDA2ZmUyNmExYTRlMjcxNWU2M2NmMjg3YSIsInN1YiI6IjVmYWVmZDUzZTI0ZTNhMDAzZmU0NGU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTpj1OoI7hLlb7sOSDuot2xNmYh2F7gMxf1l7soQDPI'

    return req
})

export default apiMovie

export const apiMovieMap = (m) => ({
    title: m.title,
    description: m.overview,
    details: `${ m.release_date} | ${m.vote_average}/10 ${m.vote_count}`,
    img: `https://image.tmdb.org/t/p/w500/${m.poster_path}`
  })