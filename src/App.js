import './App.css';
import Header from './Components/Header';
import ShowCards from './Components/ShowCards';
import React, { useEffect, useState,useRef,useCallback } from 'react';
import ShowDesc from './Components/ShowDesc';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const UPCOMMING_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US&page=";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US&include_adult=false&query=";
function App() {
  // stores the movies returned by api
  const [movies, setMovies] = useState([]);
  // stores no of pages in response
  const [pages, setPages] = useState(1);
  // stores the current page that is being loaded
  const [pageNo, setPageNo] = useState(1);
  // stores if the data is currently loading
  const [loading, setLoading] = useState(UPCOMMING_API);
  // stores the target value to fetch data from
  const [target, setTarget] = useState(UPCOMMING_API);
  
  // sets the movie array to be empty when user makes a new search request
  // and fill it with new response
  useEffect(() => {
    setLoading(m=>true)
    setPageNo(p=> 1);
    setMovies([]);
    console.log("1"+target+pageNo);
    fetch(target+pageNo)
      .then((res) => res.json())
      .then((data) => {
        // pushing the data to the useState
        setMovies(data.results);
        // setting the no of total pages that are recieved as the result of the query
        setPages(data.total_pages);
        setLoading(m=>false)
      });
  }, [target])
  
  // fetching data from the api while scrolled to next page
  useEffect(() => {
    //changes the state of the loading variable when data is being loaded
    if(pageNo!==1){
    setLoading(m=>true)
    fetch(target+pageNo)
      .then((res) => res.json())
      .then((data) => {
        // iterating over to each object and pushing it back to the setMovies useState
        setMovies(m=>{ 
          return [...m,data.results.map((r)=>m.push(r))];
        });
        setLoading(m=>false)
      });
    }
  }, [pageNo])

 
  // toggle between searched and upcomming movies
  const change = (e) => {
    if (e.target.value !== '') {    
      setTarget(SEARCH_API + e.target.value + "&page="); 
    } else if (e.target.value === '') {
      setTarget(UPCOMMING_API);
    }
  }
  
  //applying the infinite scrolling
  // storing the callback returned by the last element 
  // when one page loads
  // and loading another page when the last element is visible to the user
  const observer = useRef();
  const lastMovieElement = useCallback(node=>{ 
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting && pages > pageNo)
        setPageNo(p=>p+1);
    })
    if(node) observer.current.observe(node)
  })
  
  return (
    <>
      {
        // renders the document based on the url provided
      }
      <Router>
        <Switch>
          <Route exact path="/" >
            {/*sets the header to display searchbar*/}
            <Header isSearchBar={true} handleOnChange={change} />
            <ShowCards cards={movies} lastMovieRef={lastMovieElement}/>
          </Route>
          <Route exact path="/desc">
            {/*sets the header to not display searchbar*/}
            <Header isSearchBar={false} handleOnChange={change} />
            <ShowDesc cards />
''          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
