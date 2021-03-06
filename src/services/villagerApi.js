/* eslint-disable max-len */
export const fetchCharacters = async () => {
  const res = await fetch('https://ac-vill.herokuapp.com/villagers');
  const json = await res.json();
  
  return json;
};

export const fetchByCharacter = async (_id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${_id}`);
  const json = await res.json();
  
  return json;
};
