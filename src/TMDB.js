// TMDB api

getMovies('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d339d2e4a1c59c8499dacf75c38da31c&language=ko-KR&page=1')

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        const movies = [];
        for (var i = 0; i < 5; i++) {
            movies[i] = data.results[i];
        }
        showMovies(movies)
    })
}


function showMovies(movies) {
    document.getElementById('main').innerHTML = '';

    movies.forEach(movies => {
        const { id } = movies;
        fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=d339d2e4a1c59c8499dacf75c38da31c&language=ko-KR')
            .then(res => res.json())
            .then(videoData => {
                console.log(videoData)
                if (videoData.results.length > 0) {
                    const tr = videoData.results[0].key;
                    console.log(tr);
                    const element = document.createElement('div');
                    element.classList.add('swiper-slide');
                    element.innerHTML = `
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/${tr}?enablejsapi=1&rel=0" frameborder="0" allowfullscreen></iframe>
                    `
                    document.getElementById('main').appendChild(element);
                }
            })
    })
}