// Mostrar lista de películas
const indexContr = () => {
    const movies = getMovies();
    document.getElementById('main').innerHTML = indexView(movies);
};

// Editar una película
const editContr = (i) => {
    const movies = getMovies();
    document.getElementById('main').innerHTML = editView(i, movies[i]);
};

// Actualizar una película
const updateContr = (i) => {
    const movies = getMovies();
    movies[i].title = document.getElementById('title').value;
    movies[i].director = document.getElementById('director').value;
    movies[i].thumbnail = document.getElementById('thumbnail').value;
    setMovies(movies);
    indexContr();
};

// Restablecer las películas originales
const resetContr = () => {
    setMovies(initial_movies);

    setKeywords(initial_keywords);

    indexContr();
};


const showContr = (i) => {
    const movies = getMovies();
    document.getElementById('main').innerHTML = showView(i, movies[i]);
};

const newContr = () => {
    document.getElementById('main').innerHTML = newView();
};

const createContr = () => {
    const movies = getMovies();
    movies.push({
        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        thumbnail: document.getElementById('thumbnail').value
    });
    setMovies(movies);
    indexContr();
};


const deleteContr = (i) => {
    const movies = getMovies();
    movies.splice(i, 1);
    setMovies(movies);
    indexContr();
};


const searchContr = () => {
    document.getElementById('main').innerHTML = searchView();
};

const searchResultsContr = () => {
    const title = document.getElementById('search-input').value;
    searchMovies(title);
};


function searchMovies(query) {
    const apiKey = '8729030950f5fa2acd05380172938248'; // Reemplaza con tu API Key de TMDb
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=es-ES`;
    let data_list = [];
    fetch(url)
        .then(response => response.json())
        .then(data => {
            max_i = 0;
            for (let i = 0; i < data.results.length; i++) {
                const peli = {
                    title: data.results[i]["original_title"],
                    director: data.results[i]["release_date"],
                    thumbnail: "https://image.tmdb.org/t/p/w500/" + data.results[i]["poster_path"],
                    id_peli: data.results[i]["id"]
                };
                data_list.push(peli);
            }
            document.getElementById('main').innerHTML = searchResultsView(data_list);
        })
        .catch(error => console.error(error));

}

const addSearchContr = (i) => {
    const movies = getMovies();
    movies.push({
        title: document.getElementById("title" + i).value,
        director: 'unknown',
        thumbnail: document.getElementById('img' + i).getAttribute('src')
    });
    setMovies(movies);
    indexContr();
}

const keyWordsSearchContr = (i) => {
    console.log("HOLA");
    const id_peli = document.getElementById("id" + i).innerHTML;
    const apiKey = '8729030950f5fa2acd05380172938248'; // Reemplaza con tu API Key de TMDb
    const url = `https://api.themoviedb.org/3/movie/${id_peli}/keywords?api_key=${apiKey}&language=es-ES`;
    console.log("HOLA");
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('main').innerHTML = key_words_searchView(data["keywords"]);
        });
}


const addKeyWordContr = (i) => {
    const words = getKeywords();
    console.log(words);
    if (!words.includes(document.getElementById("word" + i).innerHTML)) {
        words.push({
            name: document.getElementById("word" + i).innerHTML,
            id: words.length
        });
        setKeywords(words);
    }

}



const ownKeywordsContr = () => {
    const words = getKeywords();
    document.getElementById('main').innerHTML = ownKeywordsView(words);
}

const delete_ownKeywordContr = (i) => {
    const words = getKeywords();
    for (let j = 0; j < words.length; j++) {
        if (words[j].id == i) {
            words.splice(j, 1);
            break;
        }
    }
    setKeywords(words);
    ownKeywordsContr();
}