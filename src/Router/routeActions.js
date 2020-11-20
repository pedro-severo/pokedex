export const goBack = (history) => {
  history.goBack();
};


export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokeDetailPage = (history, pokeName) => {
  history.push(`/poke-detail/${pokeName}`);
};
  
export const goToPokedex = (history) => {
  history.push("/pokedex");
};