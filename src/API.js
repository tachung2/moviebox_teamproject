// TMDB api 사용

const API_KEY = 'api_key=d339d2e4a1c59c8499dacf75c38da31c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const trailer = document.getElementsByClassName('trailer');

getMovies(API_URL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}