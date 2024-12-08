const indexView = (movies) => {
    let view = movies.map((movie, i) => `
        <div class="movie">
            <div class="movie-img">
                <img data-my-id="${i}" src="${movie.thumbnail}" onerror="this.src='files/noimage.png'"/>
            </div>
            <div class="title">${movie.title || "<em>No title</em>"}</div>
            <div class="actions">
                <button class="show" data-my-id="${i}">Show</button>
                <button class="edit" data-my-id="${i}">Edit</button>
                <button class="delete" data-my-id="${i}">Delete</button>
            </div>
        </div>`).join("");
    view += `
        <div class="menu">
            <button class="new">Add Movie</button>
            <button class="reset">Reset</button>
            <button class="search">Search</button>
            <button class="own_key_words">Key Words</button>
        </div>`;
    return view;
};

// Vista de edición
const editView = (i, movie) => `
    <h2>Edit Movie</h2>
    <div class="field">
        Title <br>
        <input type="text" id="title" value="${movie.title}">
    </div>
    <div class="field">
        Director <br>
        <input type="text" id="director" value="${movie.director}">
    </div>
    <div class="field">
        Thumbnail <br>
        <input type="text" id="thumbnail" value="${movie.thumbnail}">
    </div>
    <div class="actions">
        <button class="update" data-my-id="${i}">Update</button>
        <button class="index">Back</button>
    </div>`;

const showView = (i, movie) => `
    <h2>View Movie</h2>
    <div class="field">
        Title <br>
        <p>${movie.title}</p>
    </div>
    <div class="field">
        Director <br>
        <p>${movie.director}</p>
    </div>
    <div class="field">
        Thumbnail <br>
        <p>${movie.thumbnail}</p>
    </div>
    <div class="actions">
        <button class="index">Back</button>
    </div>`;


const newView = () => `
    <h2>Create Movie</h2>
    <div class="field">
        Title <br>
        <input type="text" id="title" >
    </div>
    <div class="field">
        Director <br>
        <input type="text" id="director">
    </div>
    <div class="field">
        Thumbnail <br>
        <input type="text" id="thumbnail">
    </div>
    <div class="actions">
        <button class="add">Create</button>
        <button class="index">Back</button>
    </div>`


const searchView = () => `
    <div id="search-section">
        <h2>Buscar Película</h2>
        <input type="text" id="search-input" placeholder="Escribe el nombre de la película..." />
        <button class="searchbutton">Buscar</button>
        <button class="index">Back</button>
    </div>
`;


const searchResultsView = (movies) => {
    let view = "";
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        view += `
        <div class="movie">
            <div class="movie-img">
                <img id="img${i}" src="${movie.thumbnail}" onerror="this.src='files/noimage.png'"/>
            </div>
            <div id="title${i}" class="title">${movie.title || "<em>No title</em>"}</div>
            <div id="id${i}" class="title" style="display:none">${movie.id_peli}</div>
            <div class="actions">
                <button class="add_search" data-my-id="${i}">ADD</button>
                <button class="key_words_search" data-my-id="${i}">Key Words</button>
            </div>
        </div>`;
    }
    return view;
};

const key_words_searchView = (key_words) => {
    let view = "";
    for (const key_word of key_words) {
        view += `
        <div class="key_word">
            <p id="word${key_word.id}">${key_word.name}</p>
            <button class="add_key_word"  data-my-id="${key_word.id}">ADD</button>
        </div>`;
    }
    view += `
        <div class="actions">
            <button class="index">Back</button>
        </div>`
    return view;
};


const ownKeywordsView = (words) => {
    let view = "";
    for (const word of words) {
        view += `
        <div class="key_word">
            <p id="word${word.id}">${word.name}</p>
            <button class="delete_key_word"  data-my-id="${word.id}">DELETE</button>
        </div>`;
    }
    view += `
        <div class="actions">
            <button class="index">Back</button>
        </div>`
    return view;
};

