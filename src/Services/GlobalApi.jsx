import axios from 'axios'

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "fe177cceaffa14f4d09fe68a3d8d6526"

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=fe177cceaffa14f4d09fe68a3d8d6526';
//https://api.themoviedb.org/3/movie/550?api_key=fe177cceaffa14f4d09fe68a3d8d6526
//https://api.themoviedb.org/3/trending/all/day?api_key=fe177cceaffa14f4d09fe68a3d8d6526

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId = (Id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+Id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}