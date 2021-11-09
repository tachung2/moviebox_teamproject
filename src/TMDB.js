// TMDB api

getMovies('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d339d2e4a1c59c8499dacf75c38da31c&language=ko-KR&page=1')

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data) {
    document.getElementById('main').innerHTML = '';

    data.forEach(movie => {
        const { id } = movie;
        fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=d339d2e4a1c59c8499dacf75c38da31c&language=ko-KR&page=1')
            .then(res => res.json())
            .then(videoData => {
                console.log(videoData);
                if (videoData) {
                    videoData.results.forEach(video => {
                        let { site, type } = video;
                        if (type == 'Trailer' || type == 'Teaser') {
                            if (site == 'YouTube') {
                                const tr = videoData.results[0].key;
                                console.log(tr);
                                const element = document.createElement('div');
                                element.classList.add('swiper-slide');
                                element.innerHTML = `
                                <div class="video-container">
                                    <div class="yt-player" data-id="${tr}"></div>
                                </div>
                                `
                                document.getElementById('main').appendChild(element);
                            }
                        }

                    })
                }
            })
    })
}