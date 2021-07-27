import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, phrase, skill, personality, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{species}</p>
      <p>{phrase}</p>
      <p>{skill}</p>
      <p>{personality}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
