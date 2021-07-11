import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import ShowCards from './Components/ShowCards';
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
function App() {
  return (
    <>
   <Header isSearchBar={true}/>
   <ShowCards cards={cards}/>
   </>
  );
}

export default App;
