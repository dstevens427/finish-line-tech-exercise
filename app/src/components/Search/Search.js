import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';

const Search = ({updateCharacterSearch, updatePageNumber}) => {
  const searchTextChanged = e => {
    updatePageNumber(1);
    updateCharacterSearch(e.target.value);
  };

  return (
    <form className='my-2 px-3 fw-bold fs-5'>
      Filter by
      <input className='ms-2 fs-6 rounded'
             onChange={e => searchTextChanged(e)}
             placeholder='Enter the text'>
      </input>
    </form>
  )
}

export default Search;
