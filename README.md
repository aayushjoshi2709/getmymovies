This is a datafetching with API project it fetches data from themoviedb api

# description of files

    App.js
        App.js consists of various functions to to fetch data from api and display the
        results using ShowDesc.js or showCards.js and switch between them using react routers

    cards.js
        This file is used to display a card consisting information about a perticular movie i.e. movie name, rating, description of the movies

    showCards.js
        This file is used to display movie cards of all the movies fetched from api

    header.js
        This file is used to display the page header cosisting of search box and home button.
    
    ShowDesc.js
        This file is used to display description of each movie
    
# The queries used are

    getting upcomming movies
        https://api.themoviedb.org/3/movie/upcoming?api_key=<<API_KEY>>&language=en-US&page=1

    getting searching for movies
        "https://api.themoviedb.org/3/search/movie?api_key=<<API_KEY>>&language=en-US&include_adult=false&query=";

    getting information about movies
        https://api.themoviedb.org/3/movie/${Id.id}?api_key=<<APO_KEY>>&language=en-US

# react hooks used
    useEffect
    useState
    useRef
    useCallBack

