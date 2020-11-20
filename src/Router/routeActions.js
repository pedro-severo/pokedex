export const goBack = (history) => {
  history.goBack();
};


export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokeDetailPage = (history, id) => {
  history.push(`/poke-detail/${id}`);
};
  
export const goToPokedex = (history) => {
  history.push("/pokedex");
};