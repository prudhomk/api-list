/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, species, phrase, skill, personality, image, _id }) => (
  <Link to={`/${_id}`}>
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
  </Link>
);

Character.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
