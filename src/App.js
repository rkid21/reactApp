
import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
// b90ab811

const API_URL = 'http://www.omdbapi.com?apikey=b90ab811';
 
const App = () => {

    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState();

    console.log(movies);

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

   
    console.log(data);
    setMovies(data.Search);
}

useEffect(() => {
    searchMovies('SpiderMan');
}, []);

    return(
        <div className="app">
        <h1>MovieLand</h1>
          <div className="search">
          <input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
                searchMovies(searchTerm);
                setSearchTerm(e.target.value)
            } }
            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm) }
            />
          </div>

          {
              movies?.length > 0 ? (
                <div className="container">
                   {movies.map( (movie) => (
                       <MovieCard movie={movie}/>
                   ))}
                 </div>
              ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
              )


              
          }
    

        </div>
    )
}


export default App;