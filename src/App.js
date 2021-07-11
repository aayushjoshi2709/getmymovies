import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ShowCards from './Components/ShowCards';
import React,{ useEffect,useState } from 'react';
const cards =[
  {
    name:'aayush',
    rating:'3.8',
    desc:'hi, there',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  },
  {
    name:'sumit',
    rating:'3.3',
    desc:'hi, there how are you',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  },
  {
    name:'neeraj',
    rating:'3.8',
    desc:'hi, guys',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  },  {
    name:'aayush',
    rating:'3.8',
    desc:'hi, there',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  },
  {
    name:'sumit',
    rating:'3.3',
    desc:'hi, there how are you',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  },
  {
    name:'neeraj',
    rating:'3.8',
    desc:'hi, guys',
    src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ben10Omniverse.svg/375px-Ben10Omniverse.svg.png'
  }
]
const UPCOMMING_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=20d913bda50836a3a7c9e7ad70acab65&language=en-US&page=1";
const SEARCH_API ="" ;

function App() {
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    fetch(UPCOMMING_API)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setMovies(data.results);
      
    });
  }, [])
  return (
    <>
   <Header isSearchBar={true}/>
   <ShowCards cards={movies}/>
   </>
  );
}

export default App;
