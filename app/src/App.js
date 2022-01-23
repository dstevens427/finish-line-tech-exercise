import './App.scss';
import React, { useState, useEffect } from "react";
import CharacterCards from './components/CharacterCards/CharacterCards';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  let [characters, updateCharacters] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [characterSearch, updateCharacterSearch] = useState('');
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${characterSearch}`;

  const changePage = x => e => {
    if (pageNumber + x > 0) {
      updatePageNumber(pageNumber + x);
    }
  };

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateCharacters(data.results);
    })();
  }, [api]);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className='content d-flex flex-column'>
        <span className='align-self-center fs-5 mt-4'>Rick and Morty Characters</span>
        <Search updateCharacterSearch={updateCharacterSearch} updatePageNumber={updatePageNumber} />
        <CharacterCards className='d-flex' characters={characters} updateCharacters={updateCharacters} />
        <div className='d-flex flex-row align-self-center my-2'>
          <button className='btn btn-light border border-dark me-4' onClick={changePage(-1)}>
            Prev
          </button>
          <button className='btn btn-light border border-dark' onClick={changePage(1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
