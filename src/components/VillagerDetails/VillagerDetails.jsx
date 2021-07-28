import { Component } from 'react';
import fetchByCharacter from '../../services/villagerApi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const VillagerDetails = ({ characters }) => {
    const characterDetails = characters.map((character) => (
      <li key={character.id}>
        <Character
          {...character}
        />
      </li>
    ));
  
    return <ul>{characterElements}</ul>;
  };

  VillagerDetails.propTypes = {
    characters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        skill: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }
};

export default VillagerDetails;
