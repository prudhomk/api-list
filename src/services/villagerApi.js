/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();

  return json.results;
};

