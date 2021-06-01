

import React, { useState } from 'react';

import './App.css';
import MovieList from './Components/MovieList/MovieList';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import SearchByRate from './Components/Search/SearchByRate';
import Add from './Components/Cards/Add'
import data from './Data/data.json'



const App = () => {
	
	const [searchValue,setSearchValue]=useState('');
	const [searchRate,setSearchRate]=useState('');
    const[movie,setMovie]=useState(data);


   const search =(title)=>{
	setSearchValue(title) ;  
   }
   
   const searchRatemovies =(rating)=>{
	setSearchRate(rating) ;  
   }
  
const addMovies=(x)=>{
	setMovie([...movie,x])
}

	return (

<div className='container-fluid movie-app'>
<Header text="WATCH" />
<Search search={search} />
<SearchByRate searchRatemovies={searchRatemovies} />
<Add submitMovies={addMovies}/>


<p className="App-intro">Sharing a few of our favourite movies</p>


			<div className='row'>
				<MovieList movies={movie.filter(movie=>movie.title.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())&&(movie.rating>=searchRate))} />
		
					
			</div>
		</div>
	
		
	);
};

export default App;