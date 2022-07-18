const top250 = "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn";
const searchApi = "https://api.wmdb.tv/api/v1/movie/search?q=hello";


async function getMovie(url){
    const res = await fetch(url);
    const result = await res.json()
    showMovie(result)
}

getMovie(top250)
function showMovie(movies){
    const main = document.querySelector("#main")
    main.innerHTML = "";
    movies.forEach(movie => {
        const  movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML= `
        <div class="img-container">
                <img src="${movie.data[0].poster}" alt="">
        </div>
                <div class="move-info">
                    <h3>${movie.data[0].name}</h3>
                    <span class="green">${movie.doubanRating}</span>
                </div>
                <div class="overview">
                    <h3>概览</h3>
                    <div class="text">
                    ${movie.data[0].description}</div>
                </div>
            
        `
        main.appendChild(movieEl);      
    });
}