import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ShowCards from './Components/ShowCards';
import React,{ useEffect,useState } from 'react';
const UPCOMMING_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US&page=1";
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US&page=1&include_adult=false&query=" ;

function App() {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([]);
  useEffect(() => {
    fetch(UPCOMMING_API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
      
    });
  }, [])
  // submit the change form
  const change = (e) =>
  {
    if(e.target.value !=='')
    {
      e.preventDefault();
      fetch(SEARCH_API+e.target.value)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setMovies(data.results);
      })
    }else{
      window.location.reload();
    }
  }
  return (
    <>
   <Header isSearchBar={true} handleOnChange={change}/>
   <ShowCards cards={movies}/>
   </>
  );
}

export default App;
