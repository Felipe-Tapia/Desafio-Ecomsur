let aplicacion = document.querySelector('.datos');
const apikey =  "395597dc";
const url = "http://www.omdbapi.com/?apikey=" + apikey;
let datos = new Array();


function buscar(){
    let pelicula = document.getElementById("pelicula").value;
    fetch(url + "&t=" + pelicula)
    .then(response => response.json())
    .then(data => {
        if ( data.length == 0 ) {
            console.log("NO DATA!")
        } else {
            var peliculaObject = getFilmObject(data);
        aplicacion.innerHTML =`
        <img id="poster" width="200 rem" height="300 rem" src="${data.Poster}"/>
        <p>Titulo:${data.Title}</p>
        <p>Año:${data.Year}</p>
        <p>Genero:${data.Genre}</p>
        <p>Duracion:${data.Runtime}</p>
        <button class="agregar">Agregar al carrito</button>
        `
        const botonesDeAgregar = document.querySelectorAll('.agregar');
        botonesDeAgregar.forEach(botonDeAgregar => {
        botonDeAgregar.addEventListener('click', () => {
            datos.push(peliculaObject);
            renderTabla();
        })
        })
        }
        
    }).catch(err => console.log(err))

}

    function renderTabla(){
        var filas = "";
        if(datos.length > 0){
            datos.forEach(film => {
                console.log(film);
                filas += `<tr>`
                filas += `<td>${film.title}</td>`
                filas += `<td>${film.type}</td>`
                filas += `<td>${film.language}</td>`
                filas += `<td>${film.year}</td>`
                filas += `</tr>`    
            })
            document.getElementById('tablaPeliculas').innerHTML = filas;
        }     
        
    }

function getFilmObject(data){
    var filmObject = new Pelicula();
    filmObject.actors = data.Actors;
    filmObject.awards = data.Awards;
    filmObject.boxOffice = data.BoxOffice;
    filmObject.country = data.Country;
    filmObject.dVD = data.DVD;
    filmObject.director = data.Director;
    filmObject.genre = data.Genre;
    filmObject.language = data.Language;
    filmObject.metascore = data.Metascore;
    filmObject.plot = data.Plot;
    filmObject.poster = data.Poster;
    filmObject.production = data.Production;
    filmObject.rated = data.Rated;
    filmObject.ratings = data.Ratings;
    filmObject.released = data.Released;
    filmObject.response = data.Response;
    filmObject.runtime = data.Runtime;
    filmObject.title = data.Title;
    filmObject.type = data.Type;
    filmObject.website = data.Website;
    filmObject.writer = data.Writer;
    filmObject.year = data.Year;
    filmObject.imdbID = data.imdbID;
    filmObject.imdbRating = data.imdbRating;
    filmObject.imdbVotes = data.imdbVotes;

    return filmObject;
}

const vaciarCarrito = document.getElementById('comprar').value;
            vaciarCarrito.addEventListener('click', () => {
                datos = {};
                renderTabla();
        })