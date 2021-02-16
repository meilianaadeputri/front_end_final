const key = 'c6fd982d3838f2ce9be09a940a0b7bee'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3';

//blok kode untuk melakukan req ke api
function getListMovie(services, sectiontitle) {
 fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card movie secara dinamis
      var moviesHTML = "";
      data.results.forEach(function(movie) {
        moviesHTML += `
        <div class="col m3 s6">
          <div class="card">
          <a href="./movie.html?id=${movie.id}">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            </div>
          </a>
          <div class="card-content text-center">
            <strong>${movie.title}</strong> <br>
            <strong>Release: ${movie.release_date}</strong>
          </div>
          </div>
      </div>
      `;
      });

      document.getElementById("movie_list").innerHTML = moviesHTML;
      document.getElementById("section_title").innerHTML = sectiontitle;
    })
    .catch(error);
}

function getMovie(movie_id) {
  fetch(endpoint_url + "/movie/" + movie_id + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card movie secara dinamis
        var moviesHTML = "";
        const movie=data;
        moviesHTML += `
        <div class="col s6">
        <h3>${movie.title}</h3>
          <strong> Genre: ${JSON.stringify((movie.genres), ['name'])}</strong>
          <br>
          <strong>${movie.overview}</strong>
          <br> <br>
          <strong>Release: ${movie.release_date}</strong>
          <br>
          <strong>Rating: ${movie.rating}</strong>
        </div>
        <div class="col s6">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
        </div>
        `;
      document.getElementById("movie_detail").innerHTML = moviesHTML;
    })
    .catch(error);
}
