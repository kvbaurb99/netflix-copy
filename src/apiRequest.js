const api = '50ba8c56ef1836468cf0ebaac0e10ac3'


const getMovies = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`,
    topMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`,
    comingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`,
    trendingMovies: `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`,
    latestMovies: `https://api.themoviedb.org/3/movie/latest?api_key=${api}&language=en-US`,
}

export default getMovies