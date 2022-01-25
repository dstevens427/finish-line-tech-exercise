import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterCards.module.scss';

const CharacterCards = ({characters, updateCharacters}) => {
  const removeCharacter = id => e => {
    updateCharacters(characters.filter(character => character.id !== id));
  };

  let characterCards = null;

  if (characters) {
    characterCards = characters.map(character => {
      let {id, image, name} = character;

      return (
        <div className={`container d-flex position-relative col-12 col-sm-4 col-md-3 p-2`} key={id}>
          <div className={`${styles.card} d-flex flex-column p-2`}>
            <img className='img-fluid' src={image} alt={`Image of ${name}`} />
            <div className='d-flex justify-content-between'>
              <span>{name}</span>
              <button className={`${styles.button} btn btn-light border border-dark d-flex align-items-center mt-2`}
                      onClick={removeCharacter(id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
        
      )
    });
  } else {
    characterCards = (
      <span>An issue has occurred, please try again.</span>
    )
  }

  return (
    <div className='d-flex flex-wrap align-self-center w-100 px-4'>
      {characterCards}
    </div>
  );
};

export default CharacterCards;
