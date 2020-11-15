export const goBack = (history) => {
    history.goBack();
  };

export const goToPokeDetailPage = (history, idOrName) => {
    history.push(`/poke-detail/${idOrName}`);
  };
  