

const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

const setupRouter = () => {
    document.addEventListener('click', (ev) => {
        // Home
        if (matchEvent(ev, '.index')) indexContr();

        /*
        FILM CONTROLLERS
        */

        // Show
        else if (matchEvent(ev, '.show')) showContr(myId(ev));

        // Edit
        else if (matchEvent(ev, '.edit')) editContr(myId(ev));
        else if (matchEvent(ev, '.update')) updateContr(myId(ev));

        // Delete
        else if (matchEvent(ev, '.delete')) deleteContr(myId(ev));

        /*
        MENU CONTROLLERS
        */

        // New
        else if (matchEvent(ev, '.new')) newContr();
        else if (matchEvent(ev, '.add')) createContr();

        // Reset
        else if (matchEvent(ev, '.reset')) resetContr();

        // Search
        else if (matchEvent(ev, '.search')) searchContr();
        else if (matchEvent(ev, '.searchbutton')) searchResultsContr();
        else if (matchEvent(ev, '.add_search')) addSearchContr(myId(ev));
        else if (matchEvent(ev, '.key_words_search')) keyWordsSearchContr(myId(ev));
        else if (matchEvent(ev, '.add_key_word')) addKeyWordContr(myId(ev));

        // Own Keywords
        else if (matchEvent(ev, '.own_key_words')) ownKeywordsContr();
        else if (matchEvent(ev, '.delete_key_word')) delete_ownKeywordContr(myId(ev));
    });
};


