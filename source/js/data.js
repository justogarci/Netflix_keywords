const initial_movies = [
    { title: "Superlópez", director: "Javier Ruiz Caldera", thumbnail: "files/superlopez.png" },
    { title: "Jurassic Park", director: "Steven Spielberg", thumbnail: "files/jurassicpark.png" },
    { title: "Interstellar", director: "Christopher Nolan", thumbnail: "files/interstellar.png" }
];

const initial_keywords = [{ name: "inicial", id: 0 }];

// Inicializar el modelo en localStorage
if (!localStorage.my_movies) {
    localStorage.my_movies = JSON.stringify(initial_movies);
}

// Función para obtener las películas
const getMovies = () => JSON.parse(localStorage.my_movies);

// Función para actualizar las películas
const setMovies = (movies) => {
    localStorage.my_movies = JSON.stringify(movies);
};

// Inicializar el modelo en localStorage
if (!localStorage.my_keywords) {
    localStorage.my_keywords = JSON.stringify(initial_keywords);
}

// Función para obtener las palabras clave
const getKeywords = () => JSON.parse(localStorage.my_keywords);

// Función para actualizar las palabras clave
const setKeywords = (keywords) => {
    localStorage.my_keywords = JSON.stringify(keywords);
};
